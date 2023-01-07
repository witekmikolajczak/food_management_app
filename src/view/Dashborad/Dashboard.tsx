import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineLaptop } from "react-icons/ai";

import { Counter, Card, Layout, Table } from "../../components";

import { useFetchProduct } from "../../features/hook/product/useFetchProduct";

import styles from "./Dashboard.module.scss";
import {
  LATEST_RECIPT,
  LATEST_RECIPT_TABLE_HEADERS,
} from "../../features/constant/latestRecipt";
import { useAppSelector } from "../../features/redux/hook";

export const Dashboard = () => {
  const productCollection = useAppSelector((state) => state.product);
  const { productIsError, productIsLoading, productIsSuccess } =
    useFetchProduct();

  function renderProductCollection() {
    if (productCollection !== undefined && productIsSuccess) {
      const collection = productCollection.map((product, index) => {
        return (
          <div key={index} className={styles.product}>
            <p>{product.productName}</p>
            <p>{product.productCount}</p>
            <p>{product.productUnit}</p>
          </div>
        );
      });
      return collection;
    }
  }

  return (
    <Layout>
      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles["counter-container"]}>
            <Card
              icon={<MdOutlineProductionQuantityLimits size={50} />}
              text="Ilość dostępnych produktów"
              wrapperClassName={styles.wrapperClassName}
              contentClassName={styles.contentClassName}
            >
              <div className={styles.counter}>
                <Counter delay={50} min={0} max={200} />
              </div>
            </Card>
            <Card
              icon={<IoDocumentTextOutline size={50} />}
              text="Ilość dostępnych produktów"
              wrapperClassName={styles.wrapperClassName}
              contentClassName={styles.contentClassName}
            >
              <div className={styles.counter}>
                <Counter delay={50} min={0} max={200} />
              </div>
            </Card>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles["section2"]}>
            <Card
              isError={productIsError}
              isLoading={productIsLoading}
              icon={<IoDocumentTextOutline size={50} />}
              text="Ostatnio dodane produkty"
              wrapperClassName={styles.wrapperClassName}
              contentClassName={styles.contentClassName}
            >
              <div className={styles["last-added-products"]}>
                {renderProductCollection()}
              </div>
            </Card>
            <Card
              isError={productIsError}
              isLoading={productIsLoading}
              icon={<IoDocumentTextOutline size={50} />}
              text="Kończące się produkty"
              wrapperClassName={styles.wrapperClassName}
              contentClassName={styles.contentClassName}
            >
              <div className={styles["last-products"]}>
                {renderProductCollection()}
              </div>
            </Card>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles["last-recipts"]}>
            <Table
              tHeadCollection={LATEST_RECIPT_TABLE_HEADERS}
              tBodyCollection={LATEST_RECIPT}
              text="Ostatnio przeglądane przepisy"
              icon={<AiOutlineLaptop size={25} />}
              fnHandleButtonClick={() => console.log('clicked')}
              // fnHandleRecordClick={(value)=>console.log(value)}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

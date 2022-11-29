import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { AiOutlineLaptop } from 'react-icons/ai';

import {
  Counter,
  Product,
  Card,
  Layout,
  Typography,
  Table,
} from '../../components';

import styles from './Dashboard.module.scss';
import { productCollection } from '../../util/constant/productCollection';
import { LATEST_RECIPT } from '../../util/constant/latestRecipt';
export const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <Layout />
      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles['product-count']}>
            <Card
              icon={<MdOutlineProductionQuantityLimits size={50} />}
              text="Ilość dostępnych produktów"
            >
              <div className={styles.counter}>
                <Counter delay={50} min={0} max={200} />
              </div>
            </Card>
          </div>
          <div className={styles['recipt-count']}>
            <Card
              icon={<IoDocumentTextOutline size={50} />}
              text="Ilość dostępnych produktów"
            >
              <div className={styles.counter}>
                <Counter delay={50} min={0} max={200} />
              </div>
            </Card>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles['available-products']}>
            <Typography variant="h5" text="Dostępne produkty" />
            <div className={styles.table}>
              <Product productCollection={productCollection} />
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles['last-recipts']}>
            <Table
              text="Ostatnio przeglądane przepisy"
              reciptCollection={LATEST_RECIPT}
              icon={<AiOutlineLaptop size={25} />}
              fnHandleClick={(recipt) => console.log(recipt)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

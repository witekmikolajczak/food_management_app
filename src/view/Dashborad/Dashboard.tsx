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
import { LATEST_RECIPT, LATEST_RECIPT_TABLE_HEADERS } from '../../util/constant/latestRecipt';

// export const renderReciptCollectionTable = (): JSX.Element[] => {
//   const renderReciptCollection = LATEST_RECIPT.map(
//     (recipt, index) => {
//       return (
//         <tr onClick={() => console.log('clicked')}>
//           <td>{index}.</td>
//           <td>{recipt.name}</td>
//           <td>{recipt.viewed}</td>
//           <td>{recipt.link}</td>
//         </tr>
//       );
//     }
//   );
//   return renderReciptCollection;
// };

function renderPorudctCollection(){
  const collection = productCollection.map((product, index)=>{
    return (
      <div key={index} className={styles.product}>
        <p>{product.name}</p>
        <p>{product.count}</p>
        <p>{product.unit}</p>
      </div>
    )
  })
  return collection
}

export const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <Layout />
      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles['counter-container']}>
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
          <div className={styles['section2']}>
            <Card
              icon={<IoDocumentTextOutline size={50} />}
              text="Ostatnio dodane produkty"
              wrapperClassName={styles.wrapperClassName}
              contentClassName={styles.contentClassName}
            >
              <div className={styles['last-added-products']}>
                  {renderPorudctCollection()}
              </div>
            </Card>
            <Card
              icon={<IoDocumentTextOutline size={50} />}
              text="Kończące się produkty"
              wrapperClassName={styles.wrapperClassName}
              contentClassName={styles.contentClassName}
            >
              <div className={styles['last-products']}>
                  {renderPorudctCollection()}
              </div>
            </Card>
          </div>

        </div>
        <div className={styles.row}>
          <div className={styles['last-recipts']}>
            <Table
              tHeadCollection={LATEST_RECIPT_TABLE_HEADERS}
              tBodyCollection={LATEST_RECIPT}
              text="Ostatnio przeglądane przepisy"
              icon={<AiOutlineLaptop size={25} />}
              fnHandleClick={(recipt) => console.log(recipt)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

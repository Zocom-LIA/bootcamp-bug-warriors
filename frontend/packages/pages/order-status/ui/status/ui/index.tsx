import './style.scss';

type Props = {
  orderNr: string;
  eta: number;
  orderReady: boolean;
};

export const Status = ({ orderNr, eta, orderReady }: Props) => {
  // const [timeLeftInMinutes, setTimeLeftInMinutes] = useState(eta);
  // const [orderReady, setOrderReady] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (timeLeftInMinutes > 1) {
  //       setTimeLeftInMinutes(timeLeftInMinutes - 1);
  //     } else {
  //       setOrderReady(true);
  //     }
  //   }, 60000);
  //   return () => clearTimeout(timer);
  // }, [timeLeftInMinutes]);

  return (
    <section className='status__container'>
      <p className='status__text'>
        {orderReady ? 'DINA WONTONS ÄR KLARA!' : 'DINA WONTONS TILLAGAS!'}
      </p>
      <p className='status__eta'>{orderReady ? '-' : `ETA ${eta} MIN`}</p>
      <p className='status__order'>#{orderNr}</p>
    </section>
  );
};

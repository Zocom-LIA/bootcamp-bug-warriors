import './style.scss';
import { Styles, Wrapper } from '@zocom/wrapper';
import { DashboardContainer } from '@zocom/dashboard-container';
import { KitchenCard, OrderStatus } from '@zocom/kitchen-card';
import { DashboardColumn, Status } from '@zocom/dashboard-container__column';
import { TopBar } from '@zocom/top-bar';


// TODO: Hämta ordrar

export const DashboardPage = () => {

  return (
    <Wrapper style={Styles.TABLET}>
      <section className='dashboard-top'>
        <TopBar/>
        <h1>KITCHEN VIEW</h1>
      </section>
        <DashboardContainer>
            <DashboardColumn status={Status.Ongoing}>
              {/* KitchenCard ska rendera ut ordar -> här de som ej är klara */}
                <KitchenCard 
                style={OrderStatus.READY} />
            </DashboardColumn>
            <DashboardColumn status={Status.Done}>
              {/* KitchenCard ska rendera ut ordar -> här de som är klara */}
              <KitchenCard 
              style={OrderStatus.SERVED} />
            </DashboardColumn>
        </DashboardContainer>
    </Wrapper>
  );
};
import './style.scss';
import { Styles, Wrapper } from '@zocom/wrapper';
import { DashboardContainer } from '@zocom/dashboard-container';
import { DashboardColumn, Status } from '@zocom/dashboard-container__column';
import { TopBar } from '@zocom/top-bar';

export const DashboardPage = () => {

  return (
    <Wrapper style={Styles.TABLET}>
      <section className='dashboard-top'>
        <TopBar/>
        <h1>KITCHEN VIEW</h1>
      </section>
        <DashboardContainer>
            <DashboardColumn status={Status.Ongoing}>
                <p>kort</p>
            </DashboardColumn>
            <DashboardColumn status={Status.Done}>
                <p>kort</p>
            </DashboardColumn>
        </DashboardContainer>
    </Wrapper>
  );
};
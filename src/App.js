import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import DashBoard from './Component/Dashboard/DashBoard';
import Sidebar from './Component/Sidebar/Sidebar';
import User from './Component/Users/User';
import Accessibility from './Component/Accessibility/Accessibility';
import Accounts from './Component/Accounts/Accounts';
import Clients from './Component/Clients/Clients';
import CommonTask from './Component/Common Task/CommonTask';
import Deals from './Component/Deals/Deals';
import InvoiceHistory from './Component/Invoice History/InvoiceHistory';
import LeadSources from './Component/Lead Sources/LeadSources';
import LeadStages from './Component/Lead Stage/LeadStages';
import Leads from './Component/Leads/Leads';
import LostDeals from './Component/Lost Deals/LostDeals';
import PaymentHistory from './Component/Payment History/PaymentHistory';
import Products from './Component/Product/Products';
import RenewalsServices from './Component/Renewal Services/RenewalsServices';
import Renewals from './Component/Renewals/Renewals';
import Roles from './Component/Roles/Roles';
import Services from './Component/Services/Services';
import Territories from './Component/Territories/Territories';
import UnqualifiedLead from './Component/Unqualifield Lead/UnqualifiedLead';


function App() {
  return (
    <div>
    <Sidebar>
    <Routes>
        <Route path="/" element={<DashBoard/>} />
        <Route path="/User" element={ <User/> } />
        <Route path="/Accessibility" element={ <Accessibility/> } />
        <Route path="/Accounts" element={ <Accounts/> } />
        <Route path="/Clients" element={ <Clients/> } />
        <Route path="/CommonTask" element={ <CommonTask/> } />
        <Route path="/Deals" element={ <Deals/> } />
        <Route path="/InvoiceHistory" element={ <InvoiceHistory/> } />
        <Route path="/LeadSources" element={ <LeadSources/> } />
        <Route path="/LeadStages" element={ <LeadStages/> } />
        <Route path="/Leads" element={ <Leads/> } />
        <Route path="/LostDeals" element={ <LostDeals/> } />
        <Route path="/PaymentHistory" element={ <PaymentHistory/> } />
        <Route path="/Products" element={ <Products/> } />
        <Route path="/RenewalsServices" element={ <RenewalsServices/> } />
        <Route path="/Renewals" element={ <Renewals/> } />
        <Route path="/Roles" element={ <Roles/> } />
        <Route path="/Services" element={ <Services/> } />
        <Route path="/Territories" element={ <Territories/> } />
        <Route path="/UnqualifiedLead" element={ <UnqualifiedLead/> } />
       
      </Routes>
      </Sidebar>
    </div>
  );
}

export default App;

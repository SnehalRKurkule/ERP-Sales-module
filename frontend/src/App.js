
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './Dashboard';
import OrdersInvoice from './OrdersInvoice';
import CreateOrder from './CreateOrder';
import ManageQuotations from './ManageQuotation';
import GenerateQuotation from './GenerateQuotation';
import InvoicePage from './InvoicePage';
import OrderDetails from "./OrderDetails";

function App() {
  const [orders, setOrders] = useState([]);
  const [quotations, setQuotations] = useState([]);

  const handleSaveOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
    // Also create a quotation from the order
    const newQuotation = {
      id: `QT-${newOrder.orderNumber.split('-')[1]}`,
      customer: newOrder.customer,
      date: newOrder.date,
      expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      amount: newOrder.total,
      status: "draft",
      salesperson: newOrder.salesperson,
      paymentTerms: newOrder.paymentTerms
    };
    setQuotations([...quotations, newQuotation]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Dashboard /></Layout>} />
        <Route 
          path="/orders" 
          element={
            <Layout>
              <OrdersInvoice orders={orders} setOrders={setOrders} />
            </Layout>
          } 
        />

      <Route
        path="/orders/:orderNumber"
        element={<OrderDetails orders={orders} />}
      />
        <Route 
          path="/create-order" 
          element={
            <Layout>
              <CreateOrder onSave={handleSaveOrder} />
            </Layout>
          } 
        />
        <Route 
          path="/quotations" 
          element={
            <Layout>
              <ManageQuotations 
                quotations={quotations} 
                setQuotations={setQuotations} 
              />
            </Layout>
          } 
        />
        <Route 
          path="/generate-quotation" 
          element={
            <Layout>
              <GenerateQuotation 
                onGenerate={(newQuotation) => 
                  setQuotations([...quotations, newQuotation])
                } 
              />
            </Layout>
          } 
        />
        <Route path="/generate-quotation/:id" element={<GenerateQuotation />} />
        <Route path="/invoices" element={<Layout><InvoicePage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
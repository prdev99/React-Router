import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Page404 from "./components/Page404";
import User from "./components/User";
import Filter from "./components/Filter";
import Contact from "./components/Contact";
import Company from "./components/Company";
import Channel from "./components/Channel";
import Other from "./components/Other";
import Login from "./components/Login";
import Protected from "./components/Protected";
import { Component } from "react";
import ProductList from "./components/ProductList";
import ProductShow from "./components/ProductShow";
import ProductCreate from "./components/ProductCreate";
import Demo from "./components/Demo";

function App() {
  return (
    <div className="App">
      <Demo />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product" element={<ProductCreate />} />
          <Route path="/product/:id" element={<ProductShow />} />
          <Route path="/about" element={<Protected Component={About} />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/filter" element={<Protected Component={Filter} />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/contact/" element={<Contact />}>
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
            <Route path="other" element={<Other />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

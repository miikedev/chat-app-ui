import { Route, Routes } from "react-router";

import ChatList from "./pages/chat-list";
import Conversation from "./pages/conversation";
import ChatLayout from "./layouts/chat-layout";
import Tictoe from "./pages/tictoe";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import AuthPage from "@/pages/auth";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<AuthPage />} path="/auth" />
      <Route element={<ChatLayout />} path="/chat">
        <Route index element={<ChatList />} />
        <Route element={<Conversation />} path=":id" />
      </Route>
      <Route element={<Tictoe />} path="/tictoe" />
    </Routes>
  );
}

export default App;

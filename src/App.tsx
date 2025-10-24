import { Route, Routes } from "react-router";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import AuthPage from "@/pages/auth";
import ChatList from "./pages/chat-list";
import Conversation from "./pages/conversation";
import ChatLayout from "./layouts/chat-layout";

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
        <Route element={<ChatList />} index />
        <Route element={<Conversation />} path=":id" />
      </Route>
    </Routes>
  );
}

export default App;

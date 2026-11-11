import React from "react";
import Dashboard from "./pages/index";
import Page404 from "./pages/page-404";
import PageBlank from "./pages/page-blank";
import PageLogin from "./pages/page-login";
import TablesBasic from "./pages/tables-basic";
import UiButtons from "./pages/ui-buttons";
import UiForms from "./pages/ui-forms";

export default function App() {
  const path = window.location.pathname;
  switch (path) {
    case "/index.html": return <Dashboard />;
    case "/page-404.html": return <Page404 />;
    case "/page-blank.html": return <PageBlank />;
    case "/page-login.html": return <PageLogin />;
    case "/tables-basic.html": return <TablesBasic />;
    case "/ui-buttons.html": return <UiButtons />;
    case "/ui-forms.html": return <UiForms />;
    default: return <Dashboard />;
  }
}

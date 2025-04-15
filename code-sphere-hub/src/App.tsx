
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

import OurTeam from "./pages/OurTeam";
import Courses from "./pages/Courses";
import Problems from "./pages/Problems";
import DataStructures from "./pages/DataStructures";
import CompetitiveProgramming from "./pages/CompetitiveProgramming";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Python from "./pages/Python";
import PythonDictionarySet from "./pages/PythonDictionarySet";
import PythonVariablesDataTypes from "./pages/PythonVariablesDataTypes";
import PythonStringsConditionals from "./pages/PythonStringsConditionals";
import PythonListTuple from "./pages/PythonListTuple";
import PythonLoops from "./pages/PythonLoops";
import PythonFunctionsRecursion from "./pages/PythonFunctionsRecursion";
import PythonFileIO from "./pages/PythonFileIO";
import PythonOOPBasics1 from "./pages/PythonOOPBasics1";
import PythonOOPBasics2 from "./pages/PythonOOPBasics2";
import WebDevelopment from "./pages/WebDevelopment";

import JavaScript from "./pages/JavaScript";
import JSVariablesDataTypes from "./pages/JSVariablesDataTypes";
import JSOperatorsConditionals from "./pages/JSOperatorsConditionals";
import JSLoopsStrings from "./pages/JSLoopsStrings";
import JSFunctionsMethods from "./pages/JSFunctionsMethods";
import JSDOM1 from "./pages/JSDOM1";
import JSDOM2 from "./pages/JSDOM2";
import JSEvents from "./pages/JSEvents";
import JSClassesObjects from "./pages/JSClassesObjects";
import JSCallbacks from "./pages/JSCallbacks";
import CSS from "./pages/CSS";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
      
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/datastructures" element={<DataStructures />} />
          <Route path="/competitiveprogramming" element={<CompetitiveProgramming />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          
          {/* Python Routes */}
          <Route path="/python" element={<Python />} />
          <Route path="/python/dictionary-set" element={<PythonDictionarySet />} />
          <Route path="/python/variables-data-types" element={<PythonVariablesDataTypes />} />
          <Route path="/python/strings-conditionals" element={<PythonStringsConditionals />} />
          <Route path="/python/list-tuple" element={<PythonListTuple />} />
          <Route path="/python/loops" element={<PythonLoops />} />
          <Route path="/python/functions-recursion" element={<PythonFunctionsRecursion />} />
          <Route path="/python/file-io" element={<PythonFileIO />} />
          <Route path="/python/oop-basics-1" element={<PythonOOPBasics1 />} />
          <Route path="/python/oop-basics-2" element={<PythonOOPBasics2 />} />
          
        
          
          {/* Web Development Routes */}
          <Route path="/webdev" element={<WebDevelopment />} />
          <Route path="/javascript" element={<JavaScript />} />
          <Route path="/css" element={<CSS />} />
          <Route path="/javascript/variables-data-types" element={<JSVariablesDataTypes />} />
          <Route path="/javascript/operators-conditionals" element={<JSOperatorsConditionals />} />
          <Route path="/javascript/loops-strings" element={<JSLoopsStrings />} />
          <Route path="/javascript/functions-methods" element={<JSFunctionsMethods />} />
          <Route path="/javascript/dom-1" element={<JSDOM1 />} />
          <Route path="/javascript/dom-2" element={<JSDOM2 />} />
          <Route path="/javascript/events" element={<JSEvents />} />
          <Route path="/javascript/classes-objects" element={<JSClassesObjects />} />
          <Route path="/javascript/callbacks" element={<JSCallbacks />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

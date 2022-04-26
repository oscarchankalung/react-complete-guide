import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const { sendRequest, status, error } = useHttp(addQuote);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes");
    }
  }, [navigate, status]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  if (error) {
    return <div className="centered focused">{error}</div>;
  }

  return (
    <QuoteForm onAddQuote={addQuoteHandler} isLoading={status === "pending"} />
  );
};

export default NewQuote;

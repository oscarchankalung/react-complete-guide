import React, { Fragment, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuoutesFound from "../components/quotes/NoQuotesFound";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <NoQuoutesFound />;
  }

  const LoadComments = () => {
    return (
      <div className="centered">
        <Link className="btn--flat" to="comments">
          Load Comments
        </Link>
      </div>
    );
  };

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Routes>
        <Route index element={<LoadComments />}></Route>
        <Route path="comments" element={<Comments />}></Route>
      </Routes>
    </Fragment>
  );
};

export default QuoteDetail;

import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import UploadComponent from "./component";
import StoreContext from "../../components/App/store";
import { makeGoToUrl } from "../../lib/router-utils";

export default withRouter(({ location, history }) => {
  const goTo = makeGoToUrl(history, location);
  const ctx = useContext(StoreContext);
  return (
    <UploadComponent
      onStatsUploaded={(data) => {
        ctx.onStatsDataLoaded(data);
        goTo("/stats");
      }}
      onUrl={(url) => goTo("/stats", { stats: url })}
    />
  );
});

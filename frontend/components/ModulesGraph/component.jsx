import React from "react";
import PropTypes from "prop-types";
import renderGraph from "./visGraph";

function createMarkup() {
  return {
    __html: '<div id="graph-container" style="height:100%;"></div>',
  };
}

export default class ModulesGraphComponent extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.network = null;
  }

  componentDidMount() {
    this.renderGraph();
  }

  shouldComponentUpdate(nextProps) {
    const {
      moduleId: currentModuleId,
      isGrouped: currentIsGrouped,
    } = this.props;
    return (
      nextProps.moduleId !== currentModuleId ||
      nextProps.isGrouped !== currentIsGrouped
    );
  }

  componentDidUpdate() {
    this.renderGraph();
  }

  renderGraph = () => {
    const {
      modules,
      moduleId,
      onNodeClick,
      onDrawEnd,
      onDrawStart,
      isGrouped,
      clusterMap,
    } = this.props;
    const container = this.container.current;
    const rect = container.getBoundingClientRect();
    this.network = renderGraph(
      {
        modules,
        clusterMap,
        moduleId,
        onNodeClick,
        onDrawEnd,
        onDrawStart,
        isGrouped,
      },
      {
        width: rect.width,
        height: rect.height,
      },
    );
  };

  render() {
    return (
      <div
        ref={this.container}
        style={{ flexGrow: 1 }}
        dangerouslySetInnerHTML={createMarkup()} // eslint-disable-line
      />
    );
  }
}

ModulesGraphComponent.defaultProps = {
  onNodeClick: () => {},
  onDrawStart: () => {},
  onDrawEnd: () => {},
  isGrouped: false,
};

ModulesGraphComponent.propTypes = {
  moduleId: PropTypes.string.isRequired,
  modules: PropTypes.arrayOf(PropTypes.object).isRequired,
  clusterMap: PropTypes.object.isRequired,
  onNodeClick: PropTypes.func,
  onDrawStart: PropTypes.func,
  onDrawEnd: PropTypes.func,
  isGrouped: PropTypes.bool,
};

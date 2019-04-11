import { PureComponent } from "react";

export default class Bundle extends PureComponent {
  state = {
    mod: null
  };

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  async load(props) {
    this.setState({ mod: null });
    const mod = await props.load();
    this.setState({ mod: mod.default ? mod.default : mod });
  }

  render() {
    return this.props.children(this.state.mod);
  }
}

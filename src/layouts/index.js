import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Footer from '../components/Footer';
import './index.css';

function delay(seconds) {
  return setTimeout(fn, seconds * 1000);
}

class TemplateWrapper extends PureComponent {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    setTimeout(() => this.setState({
      isLoading: false,
    }), 500)
  }

  render() {
    return (
      <div id="wrapper">
        <Helmet
          title="julien.codes"
          meta={[
            { name: 'description', content: 'An awesome website that is!' },
            { name: 'keywords', content: 'javascript, docker, aws, python' },
          ]}
          bodyAttributes={{
            class: this.state.isLoading ? 'is-loading' : '',
          }}
        />
        <section id="main">
          {this.props.children()}
        </section>
        <Footer />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

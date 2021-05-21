import React, { Component } from 'react';
import { render } from 'react-dom';
import Transformer from '../Components/Transformer'

class TransformersSection extends Component {

  renderProptimii = () => {
    return this.props.proptimii.map(transformer => {
      return <Transformer key={transformer.id} transformer={transformer} />
    })
  }

    render(props) {
    return (
      <section className = "transformers-section">
        { this.renderProptimii() }
      </section>
    );
  }
}

export default TransformersSection;

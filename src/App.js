import React, { Component } from 'react';
// import asyncComponent from './AsyncComponent'
import { lineOption } from './options'
import { Modal, Button } from 'antd';
import LineReact from './components/LineReact'
import 'antd/dist/antd.css'
// const LineReact = asyncComponent(() => import(/* webpackChunkName: "Line" */'./components/LineReact'))  //折线图组件

// // import React from 'react';

// function App(props) {
//   const [showModal, setShowModal] = useState(false)
//   return (
//       <div>
//         <h2>折线图react组件实现</h2>
//         <Button type="primary" onClick={setShowModal(true)}>
//           Open Modal
//         </Button>
//         <Modal
//           title="Basic Modal"
//           visible={showModal}
//           // onOk={this.handleOk}
//           // onCancel={this.handleCancel}
//         >
//           <LineReact option={lineOption} />
//         </Modal>
        
//       </div>
//   );
// }

// export default App;


class App extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    return (
      <div>
        <h2>折线图react组件实现</h2>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          // onOk={this.handleOk}
          // onCancel={this.handleCancel}
        >
          <LineReact option={lineOption} />
        </Modal>
        
      </div>
    );
  }
}

export default App;
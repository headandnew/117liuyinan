import React from 'react';
import './androidActionSheet.css';

export default class AndroidActionSheet extends React.Component {

  static defaultProps = {
    isActive: false,
    tpye: '',
    title: '',
    menus: [],
    onCancel: () => {},
  };

 
  getMaskClassName = () => {
    if (!this.props.isActive) {
      return 'mask hideMask';
    }
    return 'mask showMask';
  }

  getMenuClassName = () => {
    if (!this.props.isActive) {
      return 'menu1';
    }
    return 'menu1 showMenu';
  }

  handleMenuItemClick = idx => {
    const { menus, onCancel } = this.props;
    menus[idx].click && menus[idx].click(idx);

    onCancel();
  }

  render() {
    const { title, menus, } = this.props;
    
    return (
      <div className="actionsheetCtn">
        <div className={this.getMaskClassName()} onClick={this.props.onCancel} />
        <div className={this.getMenuClassName()}>
          {
            !title.length
            ? null
            : <div className="title divider">{title}</div>
          }

          {
            menus.map((item, idx) => (
              <div
                className="btn divider"
                key={`actionSheet_${idx}`}
                onClick={() => this.handleMenuItemClick(idx)}
              >
                {item.title}
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

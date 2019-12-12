import React,{Component} from 'react';
import {Checkbox, Col, Drawer, message, Row} from "antd";
import CustomScrollbars from "util/CustomScrollbars";
import AppModuleHeader from "../../../src/components/AppModuleHeader/index";
import AddContact from "../../../src/components/contact/AddContact";
import IntlMessages from "util/IntlMessages";
import {arrayMove, SortableContainer} from "react-sortable-hoc";
import ContactCell from "../../components/contact/ContactList/ContactCell";

let contactId = 723812738;

const contactList = [
  {
    'id': 1457690400,
    'name': 'Stella Johnson',
    'thumb': 'https://via.placeholder.com/150x150',
    'nmls': '123456',
    'companyName': 'Apple inc',
    'designation': 'Wells Fargo ',
    'selected': false,
    'starred': false,
    'frequently': true,
  }, {
    'id': 1457690401,
    'name': 'Garry Sobars',
    'thumb': 'https://via.placeholder.com/150x150',
    'nmls': '123456',
    'companyName': 'Apple inc',
    'phone': '+1-215-745-7529',
    'designation': 'Mortgage Life',
    'selected': false,
    'starred': false,
    'frequently': true,
  },
  {
    'id': 1457690402,
    'name': 'Alex Dolgove',
    'thumb': 'https://via.placeholder.com/150x150',
    'nmls': '123456',
    'companyName': 'Apple inc',
    'designation': 'Wells Fargo ',
    'selected': false,
    'starred': false,
    'frequently': true,
  }, {
    'id': 1457690403,
    'name': 'Domnic Brown',
    'thumb': 'https://via.placeholder.com/150x150',
    'nmls': '123456',
    'companyName': 'Apple inc',
    'designation': 'Mortgage Life',
    'selected': false,
    'starred': false,
    'frequently': true,
  }, {
    'id': 1457690404,
    'name': 'Kadir M',
    'thumb': 'https://via.placeholder.com/150x150',
    'nmls': '123456',
    'companyName': 'Apple inc',
    'designation': 'Wells Fargo ',
    'selected': false,
    'starred': false,
    'frequently': false,
  }, {
    'id': 1457690405,
    'name': 'John Smith',
    'thumb': 'https://via.placeholder.com/150x150',
    'nmls': '123456',
    'companyName': 'Apple inc',
    'designation': 'Mortgage Life',
    'selected': false,
    'starred': false,
    'frequently': false,
  }, {
    'id': 1457690406,
    'name': 'Domnic Harris',
    'thumb': 'https://via.placeholder.com/150x150',
    'nmls': '123456',
    'companyName': 'Apple inc',
    'designation': 'Wells Fargo ',
    'selected': false,
    'starred': true,
    'frequently': false,
  }, {
    'id': 1457690407,
    'name': 'Jimmy Jo',
    'thumb': 'https://via.placeholder.com/150x150',
    'nmls': '123456',
    'companyName': 'Apple inc',
    'designation': 'Mortgage Life',
    'selected': false,
    'starred': false,
    'frequently': false,
  }, {
    'id': 1457690408,
    'name': 'Jimmy Jon',
    'thumb': 'https://via.placeholder.com/150x150',
    'nmls': '123456',
    'companyName': 'Apple inc',
    'designation': 'Wells Fargo ',
    'selected': false,
    'starred': true,
    'frequently': false,
  }, {
    'id': 1457690409,
    'name': 'Jeson Born',
    'thumb': 'https://via.placeholder.com/150x150',
    'nmls': '123456',
    'companyName': 'Apple inc',
    'designation': 'Mortgage Life',
    'selected': false,
    'starred': false,
    'frequently': false,
  }, {
    'id': 1457690410,
    'name': 'Steve Smith',
    'thumb': 'https://via.placeholder.com/150x150',
    'nmls': '123456',
    'companyName': 'Apple inc',
    'designation': 'Wells Fargo ',
    'selected': false,
    'starred': false,
    'frequently': false,
  },
  {
    'id': 1457690500,
    'name': 'Stella Johnson',
    'thumb': 'https://via.placeholder.com/150x150',
    'nmls': '123456',
    'companyName': 'Apple inc',
    'designation': 'Mortgage Life',
    'selected': false,
    'starred': false,
    'frequently': true,
  }, {
    'id': 1457690501,
    'name': 'Garry Sobars',
    'thumb': 'https://via.placeholder.com/150x150',
    'nmls': '123456',
    'companyName': 'Apple inc',
    'designation': 'Mortgage Life',
    'selected': false,
    'starred': false,
    'frequently': true,
  },
  {
    'id': 1457690502,
    'name': 'Alex Dolgove',
    'thumb': 'https://via.placeholder.com/150x150',
    'nmls': '123456',
    'companyName': 'Apple inc',
    'designation': 'Wells Fargo ',
    'selected': false,
    'starred': false,
    'frequently': true,
  }, {
    'id': 1457690503,
    'name': 'Domnic Brown',
    'thumb': 'https://via.placeholder.com/150x150',
    'nmls': '123456',
    'companyName': 'Apple inc',
    'designation': 'ABC Company',
    'selected': false,
    'starred': false,
    'frequently': true,
  }, {
    'id': 1457690404,
    'name': 'Kadir M',
    'thumb': 'https://via.placeholder.com/150x150',
    'nmls': '123456',
    'companyName': 'Apple inc',
    'designation': 'Wells Fargo ',
    'selected': false,
    'starred': false,
    'frequently': false,
  }, {
    'id': 1457690505,
    'name': 'John Smith',
    'thumb': 'https://via.placeholder.com/150x150',
    'nmls': '123456',
    'companyName': 'Apple inc',
    'designation': 'ABC Company',
    'selected': false,
    'starred': false,
    'frequently': false,
  }, {
    'id': 1457690506,
    'name': 'Domnic Harris',
    'thumb': 'https://via.placeholder.com/150x150',
    'nmls': '123456',
    'companyName': 'Apple inc',
    'designation': 'Wells Fargo ',
    'selected': false,
    'starred': true,
    'frequently': false,
  }, {
    'id': 1457690507,
    'name': 'Jimmy Jo',
    'thumb': 'https://via.placeholder.com/150x150',
    'nmls': '123456',
    'companyName': 'Apple inc',
    'designation': 'ABC Company',
    'selected': false,
    'starred': false,
    'frequently': false,
  }, {
    'id': 1457690508,
    'name': 'Jimmy Jon',
    'thumb': 'https://via.placeholder.com/150x150',
    'nmls': '123456',
    'companyName': 'Apple inc',
    'designation': 'Mortgage Life',
    'selected': false,
    'starred': true,
    'frequently': false,
  }, {
    'id': 1457690509,
    'name': 'Jeson Born',
    'thumb': 'https://via.placeholder.com/150x150',
    'nmls': '123456',
    'companyName': 'Apple inc',
    'designation': 'ABC Company',
    'selected': false,
    'starred': false,
    'frequently': false,
  }, {
    'id': 1457690510,
    'name': 'Steve Smith',
    'thumb': 'https://via.placeholder.com/150x150',
    'nmls': '123456',
    'companyName': 'Apple inc',
    'designation': 'Wells Fargo ',
    'selected': false,
    'starred': false,
    'frequently': false,
  }

];

const filterOptions = [
  {
    id: 1,
    name: 'All contacts',
    icon: 'all-contacts'
  }, {
    id: 2,
    name: 'Frequently contacted',
    icon: 'frequent'

  }, {

    id: 3,
    name: 'Starred contacts',
    icon: 'star'
  }
];

class ConsumerContacts extends Component {

  constructor() {
    super();
    this.state = {
      noContentFoundMessage: 'No Contact found in selected folder',
      alertMessage: '',
      showMessage: false,
      selectedSectionId: 1,
      drawerState: false,
      user: {
        name: 'Robert Johnson',
        email: 'robert.johnson@example.com',
        avatar: 'https://via.placeholder.com/150x150'
      },
      searchUser: '',
      filterOption: 'All contacts',
      allContact: contactList,
      contactList: contactList,
      selectedContact: null,
      selectedContacts: 0,
      addContactState: false,
    }
  }

  ContactSideBar = (user) => {
    return <div className="gx-module-side">
      <div className="gx-module-side-header">
        <div className="gx-module-logo">
          <i className="icon icon-contacts gx-mr-4"/>
          <span><IntlMessages id="chat.contacts"/></span>
        </div>
      </div>

      <div className="gx-module-side-content">
        <CustomScrollbars className="gx-module-side-scroll scroll-bar-nav">
          {/*<div className="gx-module-add-task">
            <Button className="gx-btn-block ant-btn" type="primary" aria-label="add"
                    onClick={this.onAddContact}>
              <i className="icon icon-add gx-mr-2"/>
              <span>Add New Contact</span>
            </Button>
          </div>*/}
          <div className="gx-module-side-nav">
            <ul className="gx-module-nav">
              {filterOptions.map(option => <li key={option.id} className="gx-nav-item">
                  <span
                    className={`gx-link ${option.id === this.state.selectedSectionId ? 'active' : ''}`} onClick={
                    this.onFilterOptionSelect.bind(this, option)
                  }>
                    <i className={`icon icon-${option.icon}`}/>
                    <span>{option.name}</span>
                  </span>
                </li>
              )}

            </ul>
          </div>
        </CustomScrollbars>
      </div>
    </div>

  };

  addFavourite = (data) => {
    this.setState({
      alertMessage: data.starred ? 'Contact removed as star' : 'Contact marked as star',
      showMessage: true,
      contactList: this.state.contactList.map((contact) => contact.id === data.id ? {
        ...contact,
        starred: !data.starred
      } : contact),
      allContact: this.state.allContact.map((contact) => contact.id === data.id ? {
        ...contact,
        starred: !data.starred
      } : contact)
    })
  };

  onContactSelect = (data) => {
    data.selected = !data.selected;
    let selectedContacts = 0;
    const contactList = this.state.contactList.map(contact => {
        if (contact.selected) {
          selectedContacts++;
        }
        if (contact.id === data.id) {
          if (contact.selected) {
            selectedContacts++;
          }
          return data;
        } else {
          return contact;
        }
      }
    );
    this.setState({
      selectedContacts: selectedContacts,
      contactList: contactList
    });

  };

  onAddContact = () => {
    this.setState({addContactState: true});
  };

  onContactClose = () => {
    this.setState({addContactState: false});
  };

  onFilterOptionSelect = (option) => {
    switch (option.name) {
      case 'All contacts': {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          contactList: this.state.allContact
        });
        break;
      }
      case 'Frequently contacted': {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          contactList: this.state.allContact.filter((contact) => contact.frequently)
        });
        break;
      }
      case 'Starred contacts': {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          contactList: this.state.allContact.filter((contact) => contact.starred)
        });
        break;
      }
      default:
        break;
    }

  };

  onSaveContact = (data) => {
    let isNew = true;
    const contactList = this.state.allContact.map((contact) => {
      if (contact.id === data.id) {
        isNew = false;
        return data
      } else {
        return contact
      }
    });
    if (isNew) {
      contactList.push(data);
    }
    this.setState({
      alertMessage: isNew ? 'Contact Added Successfully' : 'Contact Updated Successfully',
      showMessage: true,
      contactList: contactList,
      allContact: contactList
    });
    // this.onFilterOptionSelect(this.state.filterOption);
  };

  onDeleteContact = (data) => {
    this.setState({
      alertMessage: 'Contact Deleted Successfully',
      showMessage: true,
      allContact: this.state.allContact.filter((contact) => contact.id !== data.id),
      contactList: this.state.allContact.filter((contact) => contact.id !== data.id)
    })
  };

  onDeleteSelectedContact = () => {
    const contacts = this.state.allContact.filter((contact) => !contact.selected);
    this.setState({
      alertMessage: 'Contact Deleted Successfully',
      showMessage: true,
      allContact: contacts,
      contactList: contacts,
      selectedContacts: 0
    })
  };

  filterContact = (userName) => {
    const {filterOption} = this.state;
    if (userName === '') {
      this.setState({contactList: this.state.allContact});
    } else {
      const filterContact = this.state.allContact.filter((contact) =>
        contact.name.toLowerCase().indexOf(userName.toLowerCase()) > -1);
      if (filterOption === 'All contacts') {
        this.setState({contactList: filterContact});
      } else if (filterOption === 'Frequently contacted') {
        this.setState({contactList: filterContact.filter((contact) => contact.frequently)});

      } else if (filterOption === 'Starred contacts') {
        this.setState({contactList: filterContact.filter((contact) => contact.starred)});
      }
    }
  };

  handleRequestClose = () => {
    this.setState({
      showMessage: false,
    });
  };

  getAllContact = () => {
    let contactList = this.state.allContact.map((contact) => contact ? {
      ...contact,
      selected: true
    } : contact);
    this.setState({
      selectedContacts: contactList.length,
      allContact: contactList,
      contactList: contactList
    });
  };

  getUnselectedAllContact = () => {
    let contactList = this.state.allContact.map((contact) => contact ? {
      ...contact,
      selected: false
    } : contact);
    this.setState({
      selectedContacts: 0,
      allContact: contactList,
      contactList: contactList
    });
  };

  onAllContactSelect() {
    const selectAll = this.state.selectedContacts < this.state.contactList.length;
    if (selectAll) {
      this.getAllContact();
    } else {
      this.getUnselectedAllContact();
    }
  }

  updateContactUser(evt) {
    this.setState({
      searchUser: evt.target.value,
    });
    this.filterContact(evt.target.value)
  }

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      contactList: arrayMove(this.state.contactList, oldIndex, newIndex),
    });
  };

  render() {
    const {user, contactList, addContactState, drawerState, selectedContacts, alertMessage, showMessage, noContentFoundMessage} = this.state;
    const Contacts = SortableContainer(({contactList, addFavourite, onContactSelect, onDeleteContact, onSaveContact}) => {
      return (
        <Row>
          <Col span={24}>
            {contactList.map((contact, index) => (
              <ContactCell key={index} index={index} contact={contact} addFavourite={addFavourite} onContactSelect={onContactSelect} onDeleteContact={onDeleteContact} onSaveContact={onSaveContact}/>
            ))}
          </Col>
        </Row>
      );
    });
    return (
      <div className="gx-main-content">
        <div className="gx-app-module">

          <div className="gx-d-block gx-d-lg-none">
            <Drawer
              placement="left"
              closable={false}
              visible={drawerState}
              onClose={this.onToggleDrawer.bind(this)}>
              {this.ContactSideBar()}
            </Drawer>
          </div>
          <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
            {this.ContactSideBar(user)}
          </div>

          <div className="gx-module-box">
            <div className="gx-module-box-header">
              <span className="gx-drawer-btn gx-d-flex gx-d-lg-none">
                  <i className="icon icon-menu gx-icon-btn" aria-label="Menu"
                     onClick={this.onToggleDrawer.bind(this)}/>
              </span>

              <AppModuleHeader placeholder="Search contact" notification={false} apps={false}
                               user={this.state.user}
                               onChange={this.updateContactUser.bind(this)}
                               value={this.state.searchUser}/>
            </div>
            <div className="gx-module-box-content">

              <div className="gx-module-box-topbar">
                <div className="gx-draggable-icon mr-25"></div>
                <Checkbox color="primary" className="gx-icon-btn"
                          indeterminate={selectedContacts > 0 && selectedContacts < contactList.length}
                          checked={selectedContacts > 0}
                          onChange={this.onAllContactSelect.bind(this)}
                          value="SelectMail"/>


                {selectedContacts > 0 &&
                <i className="gx-icon-btn icon icon-trash" onClick={this.onDeleteSelectedContact.bind(this)}/>}

              </div>
              <CustomScrollbars className="gx-module-content-scroll scroll-bar-nav">
                {contactList.length === 0 ?
                  <div className="gx-h-100 gx-d-flex gx-align-items-center gx-justify-content-center">
                    {noContentFoundMessage}
                  </div>
                  : <Contacts contactList={contactList}
                              addFavourite={this.addFavourite}
                              onContactSelect={this.onContactSelect}
                              onDeleteContact={this.onDeleteContact}
                              onSaveContact={this.onSaveContact}
                              onSortEnd={this.onSortEnd} useDragHandle={true}
                  />
                }


              </CustomScrollbars>

            </div>
          </div>
        </div>

        <AddContact open={addContactState} contact={{
          'id': contactId++,
          'name': '',
          'thumb': '',
          'nmls ':  '',
          'companyName': '',
          'designation': '',
          'selected': false,
          'starred': false,
          'frequently': false,
        }} onSaveContact={this.onSaveContact}
                    onContactClose={this.onContactClose} onDeleteContact={this.onDeleteContact}/>

        {showMessage && message.info(<span id="message-id">{alertMessage}</span>, 3, this.handleRequestClose)}
      </div>
    );
  }

}

export default ConsumerContacts;

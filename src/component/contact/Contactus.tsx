import React from 'react'
import Heading from '../heading/Heading'
import styles from '@/styles/Contact.module.css';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

// MUI
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contactus = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const handleForm = () => {
    onOpen();
  }

  return (
    <>
      <div className='container'>
        <div style={{ display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
          <div className={styles["contact-modal"]}>
            <div className={styles["contact-form"]}>
              <div className="payment--options">
                <Heading text={"CONTACT US"} />
                <p className='content_paragraph'>Achieve Your Cricket Goals with Us – Contact Limit Less Cricket Academy for Unmatched Support and Service</p>
              </div>
              <div className="separator">
                <hr className="line" />
                <div className={styles['contact-details']}>
                  <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', alignItems: 'center', margin: '2px 0' }}>
                    <div style={{ backgroundColor: ' #DBD3D8', height: 40, width: 40, borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PlaceIcon /></div>
                    <p>:- Wakad</p>
                  </div>
                  <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', alignItems: 'center', margin: '2px 0' }}>
                  <div style={{ backgroundColor: '#DBD3D8', height: 40, width: 40, borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><EmailIcon /></div>
                    <p>:- shaanshaikg09@gmail.com</p>
                  </div>
                  <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', alignItems: 'center', margin: '2px 0' }}>
                  <div style={{ backgroundColor: '#DBD3D8', height: 40, width: 40, borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CallIcon /></div>
                    <p>:- +919673322045</p>
                  </div>
                </div>
                <hr className="line" />
              </div>
              <div className="credit-card-info--form">
                <div className={styles["credit-card-info--form-container"]}>
                  <div className={styles["contact-input_container"]}>
                    <label htmlFor="password_field" className={styles["contact-input_label"]}>Full Name</label>
                    <input id="password_field" className={styles["contact-input_field"]} type="text" name="input-name" title="Input Name" placeholder="Full Name" />
                  </div>
                  <div className={styles["contact-input_container"]}>
                    <label htmlFor="password_field" className={styles["contact-input_label"]}>Email</label>
                    <input id="password_field" className={styles["contact-input_field"]} type="text" name="input-email" title="enter email" placeholder="Enter Email" />
                  </div>
                </div>
                <div className={styles["contact-input_container"]}>
                  <label htmlFor="password_field" className={styles["contact-input_label"]}>Subject</label>
                  <input id="password_field" className={styles["contact-input_field"]} type="text" name="subject" title="Subject" placeholder="Subject" />
                  <label htmlFor="password_field" className={styles["contact-input_label"]}>Message</label>
                  <input id="password_field" className={styles["contact-input_field"]} type="Message" name="message" title="Message" placeholder="Message" />
                </div>
              </div>
              <button className={styles["purchase--btn"]} onClick={handleForm}>Contact Now</button>
            </div>
          </div>
        </div>
      </div >
      <Modal isOpen={isOpen} placement={"center"} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1" style={{ color: 'rgba(36, 43, 46, .8)'}}>Thank you</ModalHeader>
              <ModalBody>
                <p style={{ color: 'rgba(36, 43, 46, .8)'}}> 
                  Thank you for connecting with us. Our Team will conntact you soon.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default Contactus
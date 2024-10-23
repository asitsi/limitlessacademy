import React, { useState } from 'react'
import Heading from '../heading/Heading'
import styles from '@/styles/Contact.module.css';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

// MUI
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const initialValues = {
  inputName: "",
  inputEmail: "",
  subject: "",
  message: ""
};

const Contactus = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [form, setForm] = useState<any>(initialValues)
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)

  const scriptUrl = 'https://script.google.com/macros/s/AKfycbxSvxoKnYizA2oiufB8rHOkVjKsfv8kf5j5uLYussW5vkFAN06M277dNIpwJ6VYQrWlrQ/exec';

  const handleForm = async () => {
    if (form.inputName && form.inputEmail && form.subject && form.message === '') {
      return setError('something went wrong')
    }
    setLoading(true);

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    //  data save to Google sheet
    await fetch(scriptUrl, {
      method: "POST", body: formData
    })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        setLoading(false);
        setForm(initialValues);
        onOpen();

      })
      .catch((err) => setError('something went wrong from the server'));
  }

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

  }

  return (
    <>
      <div className='container'>
        <div style={{ display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
          <div className={styles["contact-modal"]}>
            <div className={styles["contact-form"]}>
              <div className="payment--options">
                <Heading text={"CONTACT US"} />
                <p className='content_paragraph text-foreground'>Achieve Your Cricket Goals with Us – Contact LimitLess Cricket Academy for Unmatched Support and Service</p>
              </div>
              <div className="separator">
                <hr className="line" />
                <div className={styles['contact-details']}>
                  <div className={styles['contact-details-container']}>
                    <div className={styles['contact-details-icon-dev']}><PlaceIcon style={{ fontSize: '18px' }} /></div>
                    <p className={styles['contact-details-text']}>:- Ground Zero, near Kidzee School, Vishnu Dev Nagar, Wakad, Pune, Pimpri-Chinchwad, Maharashtra 411057</p>
                  </div>
                  <div className={styles['contact-details-container']}>
                    <div className={styles['contact-details-icon-dev']}><EmailIcon style={{ fontSize: '18px' }} /></div>
                    <p className={styles['contact-details-text']}>:- shaanshaikg09@gmail.com</p>
                  </div>
                  <div className={styles['contact-details-container']}>
                    <div className={styles['contact-details-icon-dev']}><CallIcon style={{ fontSize: '18px' }} /></div>
                    <p className={styles['contact-details-text']}>:- +919673322045</p>
                  </div>
                </div>
                <hr className="line" />
              </div>
              <div className="credit-card-info--form">
                <div className={styles["credit-card-info--form-container"]}>
                  <div className={styles["contact-input_container"]}>
                    <label htmlFor="password_field" className={styles["contact-input_label"]}>Full Name</label>
                    <input id="password_field" className={styles["contact-input_field"]} type="text" name="inputName" title="Input Name" placeholder="Full Name" onChange={(e) => handleInput(e)} />
                  </div>
                  <div className={styles["contact-input_container"]}>
                    <label htmlFor="password_field" className={styles["contact-input_label"]}>Email</label>
                    <input id="password_field" className={styles["contact-input_field"]} type="text" name="inputEmail" title="enter email" placeholder="Enter Email" onChange={(e) => handleInput(e)} />
                  </div>
                </div>
                <div className={styles["contact-input_container"]}>
                  <label htmlFor="password_field" className={styles["contact-input_label"]}>Subject</label>
                  <input id="password_field" className={styles["contact-input_field"]} type="text" name="subject" title="Subject" placeholder="Subject" onChange={(e) => handleInput(e)} />
                  <label htmlFor="password_field" className={styles["contact-input_label"]}>Message</label>
                  <textarea id="password_field" className={styles["contact-input_field"]} name="message" title="Message" placeholder="Message" onChange={(e) => handleInput(e)} />
                </div>
              </div>
              <button className={styles["purchase--btn"]} onClick={handleForm}>Contact Now</button>
              {error !== '' ? error : null}
            </div>
          </div>
        </div>
      </div >
      <Modal isOpen={isOpen} placement={"center"} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1" style={{ color: 'rgba(36, 43, 46, .8)' }}>Thank you</ModalHeader>
              <ModalBody>
                <p style={{ color: 'rgba(36, 43, 46, .8)' }}>
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
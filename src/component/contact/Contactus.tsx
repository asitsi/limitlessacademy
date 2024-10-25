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

  const scriptUrl = 'https://script.google.com/macros/s/AKfycbxcDEDy4LwmJUnh_ko22jxUYlEtGGr6NOlRQe2AxMIoHLo_0lHpNR7v2J1_Fwn4Bf0x/exec';

  const validateForm = () => {
    if (!form.inputName) return 'Name is required';
    if (!form.inputEmail) return 'Email is required';
    if (!form.subject) return 'Subject is required';
    if (!form.message) return 'Message is required';

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.inputEmail)) return 'Please enter a valid email address';

    return '';
}

  const handleForm = async () => {
    const errorMessage = validateForm();
    if (errorMessage) {
        setError(errorMessage);
        return;
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
        setError("");
      })
      .catch((err) => setError('Something went wrong from the server**'));
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
                    <input id="password_field" className={styles["contact-input_field"]} style={ error === 'Name is required' ? { border: '1px solid red' } : {} } value={form.inputName} type="text" name="inputName" title="Input Name" placeholder="Full Name*" onChange={(e) => handleInput(e)} />
                  </div>
                  <div className={styles["contact-input_container"]}>
                    <label htmlFor="password_field" className={styles["contact-input_label"]}>Email</label>
                    <input id="password_field" className={styles["contact-input_field"]} style={ error === 'Email is required' || '' ? { border: '1px solid red' } : {} } value={form.inputEmail} type="text" name="inputEmail" title="enter email" placeholder="Enter Email*" onChange={(e) => handleInput(e)} />
                  </div>
                </div>
                <div className={styles["contact-input_container"]}>
                  <label htmlFor="password_field" className={styles["contact-input_label"]}>Subject</label>
                  <input id="password_field" className={styles["contact-input_field"]} style={ error === 'Subject is required' || '' ? { border: '1px solid red' } : {} }  value={form.subject} type="text" name="subject" title="Subject" placeholder="Subject*" onChange={(e) => handleInput(e)} />
                  <label htmlFor="password_field" className={styles["contact-input_label"]}>Message</label>
                  <textarea id="password_field" className={styles["contact-input_field"]} style={ error === 'Message is required' || '' ? { border: '1px solid red' } : {} }  value={form.message} name="message" title="Message" placeholder="Message*" onChange={(e) => handleInput(e)} />
                </div>
              </div>
              <Button
                isLoading={loading}
                className={styles["purchase--btn"]}
                spinner={
                  <svg
                    className="animate-spin h-5 w-5 text-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      fill="currentColor"
                    />
                  </svg>
                }
                onClick={handleForm}
              >
                Contact Now
              </Button>
              {error === 'Please enter a valid email address' || 'something went wrong from the server' ? <div style={{ color: 'red', fontSize: '1rem', fontFamily: "Open Sans", fontWeight: '500' }}>{error}</div> : null}
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

export default Contactus;


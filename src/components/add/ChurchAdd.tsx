import axios from 'axios'
import { Link, useParams } from "react-router-dom";

// ============== using thesame styles as EditChurch.tsx because the layout are similar {so other devs wont get confused with the class names not corresponding}
import classes from './add.module.scss'

// import classes from '../edit/EditChurch.module.scss'
import { Icon } from "@iconify/react";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import Card from "../UI/card/Card";
import { useState } from "react";
import Alert from '../alert/Alert';


const ChurchAdd = () => {
    // set the states
    const [imageUrl, setImageUrl] = useState('')
    const [churchName, setChurchName] = useState('');
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

    const churchNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChurchName(e.target.value);
    }
    
    let errMsg;

    // send a post request to the api url
    const handleSubmit = async () => {
        // onclick scroll to top 
        window.scrollTo({ top: 0, behavior: 'smooth' });
        try {
            const endpoint = 'https://projectcaasapi.azurewebsites.net/api/Church/AddChurch';
            const requestBody = new FormData()
            requestBody.append('Name', churchName)
            requestBody.append('ChurchLogo', imageUrl)
            const response = await axios.post(endpoint, requestBody);
            console.log(response.data); // Handle the response data as needed
            //display the alert
            showAlert(true, 'success', 'Church Added Successfully')
            setChurchName('')
            // console.log(requestBody)
        } catch (error) {
            //@ts-ignore
            errMsg = error.message
            console.log(error);
            // display the error alert
            showAlert(true, 'danger', `${errMsg}`)
        }
    }

    // function for show alert if it's a success or a fail
    const showAlert = (show=false, type='',msg='') => {
        setAlert({show,type,msg})
    }

    return (
    <>
            {/* //@ts-ignore */}
            {alert && <Alert {...alert} removeAlert={showAlert}/>}

            <div className={classes.add__container}>
            <div className={classes.add__left}>
                <Card>
                    <p>Preview Changes</p>
                    <div className={`${classes.upload_circle_temp}`}>
                        <Icon icon="akar-icons:cloud-upload" />
                        <img
                            className={classes.pic}
                            // @ts-ignore
                            src={imageUrl ? URL.createObjectURL(imageUrl) : "" } 
                            alt=""
                        />
                    </div>
                    
                    <div className={classes.card__info}>
                        <div>
                            <div className={classes.title}>Name of Church</div>
                            <div className={classes.value}>
                                {churchName ? churchName : 'Undefined'}
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            <div className={classes.add__right}>
                <Card>
                    <div className={classes.card__edit}>
                        <h3 className={classes.subTitle}>
                            <Icon icon="fluent:edit-16-regular" width="24" />
                            {'Commit'}
                        </h3>
                        <div className={classes.img_wrapper}>
                            <div className={classes.upload_icon}>
                                <Icon icon="akar-icons:cloud-upload" />
                            </div>
                            <div className={classes.file_input_control}>
                                <input
                                    className={classes.file_input}
                                    type="file"
                                    id="pic"
                                    name="pic"
                                    accept="image/png, image/jpeg"
                                    // @ts-ignore
                                    onChange={(e)=> setImageUrl(e.target.files[0])}
                                />
                            </div>

                            <img
                                className={classes.pic}
                                // @ts-ignore
                                src={imageUrl ? URL.createObjectURL(imageUrl) : "" } 
                                alt=""
                            />

                        </div>

                        <form
                            onSubmit={(e)=> {
                                e.preventDefault();
                                handleSubmit()
                            }}
                        >
                            <div className={classes.form__control}>
                                <label htmlFor="Name">Name of Church</label>
                                <input
                                    id="Name of Church"
                                    type='text'
                                    placeholder='Enter church name'
                                    value={churchName}
                                    onChange={churchNameHandler}
                                />
                            </div>
                            
                            <div className={classes.file_input_control}>
                                <input
                                    className={classes.file_input}
                                    type="file"
                                    id="pic"
                                    name="pic"
                                    accept="image/png, image/jpeg"
                                    // @ts-ignore
                                    onChange={(e)=> setImageUrl(e.target.files[0])}
                                />
                            </div>
                            <div className={classes.btn__wrapper} style={{marginTop: '-1rem'}}>
                                <button className={classes.outline} type='button'>
                                    {'Upload church logo'}
                                </button>
                            </div>
                            <div className={classes.btn__wrapper}>
                                <button className={classes.button} type='submit'>
                                    {'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </Card>
            </div>
        </div>
    </>
  )
}

export default ChurchAdd


import { Link } from "react-router-dom";

// ============== using thesame styles as EditChurch.tsx because the layout are similar {so other devs wont get confused with the class names not corresponding}
import classes from './add.module.scss'
// import classes from '../edit/EditChurch.module.scss'

import { Icon } from "@iconify/react";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import Card from "../UI/card/Card";
import { useState } from "react";

const ParishAdd = () => {
    // ============== using thesame styles as EditChurch.tsx because the layout are similar {so other devs wont get confused with the class names not corresponding}
    // ============== using thesame styles as EditChurch.tsx because the layout are similar {so other devs wont get confused with the class names not corresponding}
    // set the states
    const [imageUrl, setImageUrl] = useState('')
    const [parishName, setParishName] = useState('')
    const [category, setCategory] = useState('Parish')
    const [pastor, setPastor] = useState('')
    const [city, setCity] = useState('')
    const [contact, setContact] = useState('')
    // set the functions
    const parishNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParishName(e.target.value);
    }
    const categoryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(e.target.value);
    }
    const pastorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPastor(e.target.value);
    }
    const cityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }
    const contactHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContact(e.target.value);
    }



    return (
        <div className={classes.add__container}>
            
            <div className={classes.add__left}>
                <Card>
                    <p>Preview Changes</p>
                    <div className={`${classes.upload_circle_temp}`}>
                        <Icon icon="akar-icons:cloud-upload" />
                        
                        <img 
                            className={classes.pic}
                            //@ts-ignore
                            src={imageUrl ? URL.createObjectURL(imageUrl): ""}  
                            alt="" 
                        />
                    </div>
                    
                    <div className={classes.card__info}>
                        <div>
                            <div className={classes.title}>Church Name</div>
                            <div className={classes.value}>
                                {parishName ? parishName : 'Undefined'}
                            </div>
                        </div>
                        <div>
                            <div className={classes.title}>Category</div>
                            <div className={classes.value}>
                                {category ? category : 'Undefined'}    
                            </div>
                        </div>
                        <div>
                            <div className={classes.title}>Pastor Name</div>
                            <div className={classes.value}>
                                {pastor ? pastor : 'Undefined'}
                            </div>
                        </div>
                        <div>
                            <div className={classes.title}>City</div>
                            <div className={classes.value}>
                                {city ? city : 'Undefined'}    
                            </div>
                        </div>
                        <div>
                            <div className={classes.title}>Contact</div>
                            <div className={classes.value}>
                                {contact ? contact : 'Undefined'}
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
                            //@ts-ignore
                            src={imageUrl ? URL.createObjectURL(imageUrl): ""}
                            alt=""
                        />
                    </div>
    
                    <form
                        onSubmit={(e)=> {
                            e.preventDefault();
                        }}
                    >
                        <div className={classes.form__control}>
                            <label htmlFor="Name">Name</label>
                            <input
                                id="Name"
                                type='text'
                                placeholder='Enter church name'
                                value={parishName}
                                onChange={parishNameHandler}
                            />
                        </div>
                        {/* th value of this category is going to be based on dynamicity */}
                        <div className={classes.form__control}>
                            <label htmlFor="Category">Category</label>
                            <input
                                id="Category"
                                type='text'
                                placeholder='Category '
                                value={category}
                                onChange={categoryHandler}
                                readOnly
                            />
                        </div>
                        <div className={classes.form__control}>
                            <label htmlFor="Pastor">Pastor</label>
                            <input
                                id="Pastor"
                                type='text'
                                placeholder='Enter pastor name '
                                value={pastor}
                                onChange={pastorHandler}
                            />
                        </div>
                        <div className={classes.form__control}>
                            <label htmlFor="City">City</label>
                            <input
                                id="City"
                                type='text'
                                placeholder='Enter city '
                                value={city}
                                onChange={cityHandler}
                            />
                        </div>
                        <div className={classes.form__control}>
                            <label htmlFor="Contact">Contact</label>
                            <input
                                id="Contact"
                                type='text'
                                placeholder='Enter contact info '
                                value={contact}
                                onChange={contactHandler}
                            />
                        </div>
                    <div className={classes.btn__wrapper}>    
                        <Link to="/onboarding">
                            <Button type="submit">{"Upload"}</Button>
                        </Link>
                        <Link to="/onboarding">
                            <Button outline={true}>{"Cancel"}</Button>
                        </Link>
                    </div>
                    </form>
                </div>
            </Card>
    
    
        </div>
    
    
        </div>
      )
}

export default ParishAdd
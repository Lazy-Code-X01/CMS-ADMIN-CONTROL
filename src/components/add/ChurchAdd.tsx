
import { Link, useParams } from "react-router-dom";

// ============== using thesame styles as EditChurch.tsx because the layout are similar {so other devs wont get confused with the class names not corresponding}
import classes from './add.module.scss'
// import classes from '../edit/EditChurch.module.scss'
import { Icon } from "@iconify/react";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import Card from "../UI/card/Card";
import { useState } from "react";


const ChurchAdd = () => {

    // set the states
    const [imageUrl, setImageUrl] = useState('')
    const [churchName, setChurchName] = useState('');
    const [category, setCategory] = useState('Church');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [churchPhoneNumber, setChurchPhoneNumber] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [nearestBusStop, setNearestBusStop] = useState('');
    const [churchAddress, setChurchAddress] = useState('');

    const churchNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChurchName(e.target.value);
    }
    const categoryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(e.target.value);
    }
    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }
    const churchPhoneNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChurchPhoneNumber(e.target.value);
    }
    const stateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value);
    }
    const countryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value);
    }
    const nearestBusStopHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNearestBusStop(e.target.value);
    }
    const churchAddressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChurchAddress(e.target.value);
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
                    <div>
                        <div className={classes.title}>Category</div>
                        <div className={classes.value}>
                            {category ? category : 'Undefined'}    
                        </div>
                    </div>
                    <div>
                        <div className={classes.title}>Email Address</div>
                        <div className={classes.value}>
                            {email ? email : 'Undefined'}
                        </div>
                    </div>
                    <div>
                        <div className={classes.title}>Phone Number</div>
                        <div className={classes.value}>
                            {phone ? phone : 'Undefined'}    
                        </div>
                    </div>
                    <div>
                        <div className={classes.title}>Church Phone Number</div>
                        <div className={classes.value}>
                            {churchPhoneNumber ? churchPhoneNumber : 'Undefined'}
                        </div>
                    </div>
                    <div>
                        <div className={classes.title}>State</div>
                        <div className={classes.value}>
                            {state ? state : 'Undefined'}
                        </div>
                    </div>
                    <div>
                        <div className={classes.title}>Country</div>
                        <div className={classes.value}>
                            {country ? country : 'Undefined'}
                        </div>
                    </div>
                    <div>
                        <div className={classes.title}>Nearest Bus Stop</div>
                        <div className={classes.value}>
                            {nearestBusStop ? nearestBusStop : 'Undefined'}
                        </div>
                    </div>
                    <div>
                        <div className={classes.title}>Church Address</div>
                        <div className={classes.value}>
                            {churchAddress ? churchAddress : 'Undefined'}
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
                        <label htmlFor="Pastor">Email Address</label>
                        <input
                            id="Email Address"
                            type='text'
                            placeholder='Enter pastor name '
                            value={email}
                            onChange={emailHandler}
                        />
                    </div>
                    <div className={classes.form__control}>
                        <label htmlFor="City">Phone Number</label>
                        <input
                            id="City"
                            type='number'
                            placeholder='Enter phone number '
                            value={phone}
                            onChange={phoneHandler}
                        />
                    </div>
                    <div className={classes.form__control}>
                        <label htmlFor="Contact">Church Phone Number</label>
                        <input
                            id="Church Phone Number"
                            type='number'
                            placeholder='Enter church contact info '
                            value={churchPhoneNumber}
                            onChange={churchPhoneNumberHandler}
                        />
                    </div>
                    <div className={classes.form__control}>
                        <label htmlFor="Contact">State</label>
                        <input
                            id="State"
                            type='text'
                            placeholder='Enter your state'
                            value={state}
                            onChange={stateHandler}
                        />
                    </div>
                    <div className={classes.form__control}>
                        <label htmlFor="Contact">Country</label>
                        <input
                            id="Country"
                            type='text'
                            placeholder='Enter your Country'
                            value={country}
                            onChange={countryHandler}
                        />
                    </div>
                    <div className={classes.form__control}>
                        <label htmlFor="Contact">Nearest Bus Stop</label>
                        <input
                            id="Nearest Bus Stop"
                            type='text'
                            placeholder='Enter your nearest bus stop'
                            value={nearestBusStop}
                            onChange={nearestBusStopHandler}
                        />
                    </div>
                    <div className={classes.form__control}>
                        <label htmlFor="Contact">Address</label>
                        <input
                            id="Address"
                            type='text'
                            placeholder='Enter your church Address'
                            value={churchAddress}
                            onChange={churchAddressHandler}
                        />
                    </div>
                    <div className={classes.btn__wrapper}>
                        {/* <Link to="/onboarding"> */}
                            <Button type="submit">{"Upload"}</Button>
                        {/* </Link> */}

                        {/* <Link to="/onboarding"> */}
                            <Button outline={true}>{"Cancel"}</Button>
                        {/* </Link> */}        
                    </div>
                    
                </form>
            </div>
        </Card>
    </div>
    </div>
  )
}

export default ChurchAdd
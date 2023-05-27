

import { Link } from "react-router-dom";

// ============== using thesame styles as EditChurch.tsx because the layout are similar {so other devs wont get confused with the class names not corresponding}
import classes from './add.module.scss'
// import classes from '../edit/EditChurch.module.scss'

import { Icon } from "@iconify/react";
import Button from "../UI/button/Button";
import Card from "../UI/card/Card";
import { useState, useEffect } from "react";
import axios from "axios";


interface Church {
    churchId: string;
    name: string;
}  

const ParishAdd = () => {
    // ============== using thesame styles as EditChurch.tsx because the layout are similar {so other devs wont get confused with the class names not corresponding}
    
    // set the stat2es
    const [data, setData] = useState<Church[]>([]); // for the api get request
    const [imageUrl, setImageUrl] = useState('')
    const [parishName, setParishName] = useState('');
    const [category, setCategory] = useState('Parish');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [parishPhoneNumber, setParishPhoneNumber] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [nearestBusStop, setNearestBusStop] = useState('');
    const [parishAddress, setParishAddress] = useState('');
    const [selectedItem, setSelectedItem] = useState<string>('');


    // set the functions
    const parisshNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParishName(e.target.value);
    }
    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }
    const ParishPhoneNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParishPhoneNumber(e.target.value);
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
    const ParishAddressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParishAddress(e.target.value);
    }
    const handleSelect = (event: any) => {
        setSelectedItem(event.target.value);
    };

    // fetch the church data from an api
    useEffect(() => {
        // Fetch data from API
        const fetchData = async () => {
          try {
            const response = await axios.get<{ data: Church[] }>('https://projectcaasapi.azurewebsites.net/api/Church/GetAllChurch')
            setData(response.data.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
    }, []);
    
    return (
        <div className={classes.add__container}>
            {/* <p>{data.churchId}</p> */}
            
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
                        <div className={classes.title}>Name of Parish</div>
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
                        <div className={classes.title}>Parish Phone Number</div>
                        <div className={classes.value}>
                            {parishPhoneNumber ? parishPhoneNumber : 'Undefined'}
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
                        <div className={classes.title}>Parish Address</div>
                        <div className={classes.value}>
                            {parishAddress ? parishAddress : 'Undefined'}
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
                    {/* input fileds */}
                    <form
                        onSubmit={(e)=> {
                            e.preventDefault();
                        }}
                    >
                        <div className={classes.form__control}>
                        <label htmlFor="Name">Name of Parish</label>
                        <input
                            id="Name of Parish"
                            type='text'
                            placeholder='Enter church name'
                            value={parishName}
                            onChange={parisshNameHandler}
                        />
                    </div>
                    {/* th value of this category is going to be based on dynamicity */}
                    <div className={classes.form__control}>
                        <label htmlFor="Category">Church</label>
                            <select
                            value={selectedItem}
                            onChange={handleSelect}
                            style={{
                                padding: '1rem 1.5rem',
                                border: '1px solid gainsboro',
                                outline: 'gray',
                                textTransform: 'capitalize',
                                backgroundColor: 'transparent',
                                borderRadius: '10px',
                                minWidth: '300px',
                                boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.05)',
                                //@ts-ignore
                                '@media screen and (max-width: 300px)': {
                                minWidth: 'auto',
                                },
                            }}
                            >
                                <option value={''}>Select Value</option>
                                {data.map((item)=>(
                                    <option key={item.churchId} value={item.name}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
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
                        <label htmlFor="Contact">Parish Phone Number</label>
                        <input
                            id="Parish Phone Number"
                            type='number'
                            placeholder='Enter church contact info '
                            value={parishPhoneNumber}
                            onChange={ParishPhoneNumberHandler}
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
                            placeholder='Enter your parish Address'
                            value={parishAddress}
                            onChange={ParishAddressHandler}
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
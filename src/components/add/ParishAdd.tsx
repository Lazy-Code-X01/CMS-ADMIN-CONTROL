

import { Link } from "react-router-dom";

// ============== using thesame styles as EditChurch.tsx because the layout are similar {so other devs wont get confused with the class names not corresponding}
import classes from './add.module.scss'
// import classes from '../edit/EditChurch.module.scss'

import { Icon } from "@iconify/react";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import Card from "../UI/card/Card";

const ParishAdd = () => {
    // ============== using thesame styles as EditChurch.tsx because the layout are similar {so other devs wont get confused with the class names not corresponding}
    // ============== using thesame styles as EditChurch.tsx because the layout are similar {so other devs wont get confused with the class names not corresponding}
    
    return (
        <div className={classes.add__container}>
            
            <div className={classes.add__left}>
                <Card>
                    <p>Preview Changes</p>
                    <div className={`${classes.upload_circle_temp}`}>
                        <Icon icon="akar-icons:cloud-upload" />
                    </div>
                    
                    <div className={classes.card__info}>
                        <div>
                            <div className={classes.title}>Parish Name</div>
                            <div className={classes.value}>
                                Undefined    
                            </div>
                        </div>
                        <div>
                            <div className={classes.title}>Category</div>
                            <div className={classes.value}>
                                Undefined    
                            </div>
                        </div>
                        <div>
                            <div className={classes.title}>Pastor Name</div>
                            <div className={classes.value}>
                                Undefined    
                            </div>
                        </div>
                        <div>
                            <div className={classes.title}>City</div>
                            <div className={classes.value}>
                                Undefined    
                            </div>
                        </div>
                        <div>
                            <div className={classes.title}>Contact</div>
                            <div className={classes.value}>
                                Undefined    
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
                            />
                        </div>
                        <img
                            className={classes.pic}
                            // src={props.datas?.pic}
                            alt="church profile img"
                        />
                    </div>
    
                    <form
                        onSubmit={(e)=> {
                            e.preventDefault();
                        }}
                    >
                    <Input 
                        id="Name"
                        type='text'
                        placeholder='Enter parish name'
                    />
                    {/* th value of this category is going to be based on dynamicity */}
                    <Input 
                        id="Category"
                        type='text'
                        placeholder='Category '
                    />
                    <Input 
                        id="Pastor"
                        type='text'
                        placeholder='Enter pastor name '
                    />
                    <Input 
                        id="City"
                        type='text'
                        placeholder='Enter city '
                    />
                    <Input 
                        id="Contact"
                        type='text'
                        placeholder='Enter contact info '
                    />
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
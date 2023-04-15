import React, { useState } from 'react'
import { Icon } from '@iconify/react'
// i import use fetch incase of when using real api calls
import useFetch from "../hook/useFetch";
import { IOveralTable } from "../interfaces/Itable";
import { dataHeader, data} from '../constants/tables'
import Dropdown from "../components/UI/dropdown/Dropdown";
import CustomTable from "../components/tables/customTable/CustomTable";
import { Link } from 'react-router-dom';

const dropdownOptions = [
  { label: "All", value: "all" },
  { label: "Church", value: "church" },
  { label: "Parish", value: "parish" },
];


const Churches = () => {

  const [selected, setSelected] = useState(dropdownOptions[0].value);
  let costumerTable;
  let tableData: IOveralTable[] | undefined;

  
  function selectedChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelected(() => e.target.value);
  }

  // if (status === "fetched" && data) {
    switch (selected) {
      case "church":
        tableData = data?.filter((item) => item.category === selected);
        break;
      case "parish":
        tableData = data?.filter((item) => item.category === selected);
        break;
      default:
        tableData = data;
        // alert("lol")
    }

    costumerTable = (
      <CustomTable
        selectedCategory={selected}
        headData={dataHeader}
        bodyData={tableData}
        limit={10}
      />
    );
  // }



  return (
    <section className='church'>
      <div className="flex">

        <h2 className="title">Onboarding</h2>
        <div className="btn__container">
          <Link to={'/onboarding/addchurch'}>
            <button>
            <Icon icon="material-symbols:add-circle-rounded" className='icon'/>
              Add Church
            </button>
          </Link>
          <Link to={'/onboarding/addparish'}>
            <button>
            <Icon icon="material-symbols:add-circle-rounded" className='icon'/>
              Add Parish
            </button>
          </Link>
        </div>
      </div>

      <Dropdown
        dropdownData={dropdownOptions}
        onChange={selectedChangeHandler}
      />
      {costumerTable}
    </section>
  )
}

export default Churches
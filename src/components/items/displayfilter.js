import React from 'react'
import { Button, Radio, RadioGroup } from 'react-mdl';

const DisplayFilter = () => {
        return (
          <div>
            Find the perfect gift for your loved one !<br/>
             
              Add Gifts            
              
              <RadioGroup name="demo1" value="optHer">
                  <Radio value="optHer" forHer>For Her</Radio>
                  <Radio value="optHim">For Him</Radio>
                  <Radio value="optKids">Kids</Radio>
                  <Radio value="optAny">Anyone</Radio>
              </RadioGroup>

              By price

              <RadioGroup name="demo2" value="opt2">
                  <Radio value="opt1" lessThan25>less than 25</Radio>
                  <Radio value="opt2">More than 25</Radio>
              </RadioGroup>
              
              <Button>Find</Button>
          </div>
    )
  }

export default DisplayFilter;
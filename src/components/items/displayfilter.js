import React from 'react'
import { Button, Radio, RadioGroup } from 'react-mdl';

const DisplayFilter = () => {
        return (
          <div>
            Find the perfect gift for your loved one !<br/>
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
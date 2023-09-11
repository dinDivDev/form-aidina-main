import React, { useState } from "react";
import {
  productCodeOptions,
  partNumberOptions,
  salesPersonOptions,
  deliveryTypeOptions,
  problemCodeOptions,
  tableData,
  statusOptions,
  terminationReasonOptions,
  routingTypeOptions,
  frequencyOptions,
} from "./testData";
import CustomDropDown from "../../components/CustomDropdown/CustomDropdown";
import CustomDropdownFlex from "../../components/CustomDropdown/CustomDropdownFlex";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomTable from "../../components/CustomTable/CustomTable";

const defaultData = {
  productCode: "",
  partNumber: "",
  salesPerson: "",
  deliveryType: "",
  quantity: "",
  brineTankSize: "",
  systemPrice: "",
  contractPrice: "",
  price: "",
  contract: "",
  expirationDate: "",
  problemCode: "",
  status: "",
  statusExpiration: "",
  terminationDate: "",
  terminationReason: "",
  routingType: "",
  frequency: "",
  startDate: "",
  route1: "",
  driver1: "",
  sequenceNumber1: "",
  routedBy: "",
  route2: "",
  driver2: "",
  sequenceNumber2: "",
  route3: "",
  driver3: "",
  sequenceNumber3: "",
  route4: "",
  driver4: "",
  sequenceNumber4: "",
};

const DeliveredProduct = () => {
  const [formData, setFormData] = useState(defaultData);
  const [isSystemPriceChecked, setIsSystemPriceChecked] = useState(true);

  const onChangeHandler = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const onPriceTypeChangeHandler = (e) => {
    setIsSystemPriceChecked(!isSystemPriceChecked);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    console.log("form Data", formData);
  };
  return (
    <div
      className="container mt-5 border border-primary p-4 "
      style={{ background: "rgba(172, 200, 237, 0.927)" }}
    >
      <div>
        <form className="row" onSubmit={onFormSubmitHandler}>
          <div className="col-md-6  p-2 border">
            <h6>Product Information</h6>
            <CustomDropDown
              name="productCode"
              label="Product Code"
              secondLabel="Salt Delivery"
              width="25%"
              size="sm"
              options={productCodeOptions}
              onChangeHandler={onChangeHandler}
            />
            <CustomDropDown
              name="partNumber"
              label="Part Number"
              secondLabel="40 Solar Salt"
              width="30%"
              size="sm"
              options={partNumberOptions}
              onChangeHandler={onChangeHandler}
            />

            <CustomDropDown
              name="salesPerson"
              label="Sales Person"
              width="30%"
              size="sm"
              options={salesPersonOptions}
              onChangeHandler={onChangeHandler}
            />

            <div className="row gx-3 mt-5">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-8">
                    <CustomDropDown
                      name="deliveryType"
                      label="Delivery Type"
                      size="sm"
                      width="35%"
                      options={deliveryTypeOptions}
                      onChangeHandler={onChangeHandler}
                    />
                    <CustomInput
                      name="quantity"
                      label="Default Quantity"
                      width="30%"
                      defaultValue="30"
                      onChangeHandler={onChangeHandler}
                    />
                    <CustomInput
                      name="brineTankSize"
                      label="Brine Tank Size"
                      width="30%"
                      defaultValue="30"
                      onChangeHandler={onChangeHandler}
                    />
                  </div>
                  <div className="col-md-4 d-flex align-items-center">
                    <span className="bg-secondary text-white fw-bold px-2">
                      MEMO
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-5 px-3  border border-secondary mr-1">
                <h6>Pricing Information</h6>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sytemPrice"
                    id="systemPrice"
                    onChange={onPriceTypeChangeHandler}
                    checked={isSystemPriceChecked}
                  />
                  <label className="form-check-label">System Price</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="contactPrice"
                    id="contactPrice"
                    onChange={onPriceTypeChangeHandler}
                    checked={!isSystemPriceChecked}
                  />
                  <label className="form-check-label">Contact Price</label>
                </div>
                <CustomInput
                  name="price"
                  label="Price"
                  width="40%"
                  defaultValue="$10.45"
                  onChangeHandler={onChangeHandler}
                />

                <CustomInput
                  name="contract"
                  label="Contract"
                  width="45%"
                  defaultValue="contract"
                  onChangeHandler={onChangeHandler}
                />

                <CustomInput
                  name="expirationDate"
                  label="Expiration Date"
                  width="70%"
                  type="date"
                  onChangeHandler={onChangeHandler}
                />
              </div>
            </div>
            <CustomDropDown
              name="problemCode"
              label="Service-problem code"
              size="sm"
              width="25%"
              options={problemCodeOptions}
              onChangeHandler={onChangeHandler}
            />

            <div style={{ height: "150px", overflow: "scroll" }}>
              <CustomTable tableData={tableData} />
            </div>
          </div>

          <div className="col-md-6  p-2 pt-0">
            <h6>Product Status</h6>
            <div className="d-flex flex-column border border-secondary p-2 mb-2">
              <CustomDropdownFlex
                name="status"
                label="Status"
                size="sm"
                width="30%"
                secondLabel="active"
                isHorizontal={true}
                options={statusOptions}
                onChangeHandler={onChangeHandler}
              />

              <CustomInput
                name="statusExpiration"
                label="Expiration Date"
                width="55%"
                type="date"
                isHorizontal={true}
                onChangeHandler={onChangeHandler}
              />
              <CustomInput
                name="terminationDate"
                label="Termination Date"
                width="55%"
                type="date"
                isHorizontal={true}
                onChangeHandler={onChangeHandler}
              />
              <CustomDropdownFlex
                name="terminationReasons"
                label="Termination Reasons"
                size="sm"
                width="90%"
                options={terminationReasonOptions}
                onChangeHandler={onChangeHandler}
              />
            </div>
            <div className="border border-secondary p-2">
              <h6>Route Information</h6>
              <CustomDropDown
                name="routingType"
                label="Routing Type"
                size="sm"
                width="90%"
                options={routingTypeOptions}
                onChangeHandler={onChangeHandler}
              />
              <div className="row mt-5">
                <div className="col-md-6">
                  <CustomDropDown
                    name="frequency"
                    label="Frequency (Days)"
                    size="sm"
                    width="90%"
                    options={frequencyOptions}
                    onChangeHandler={onChangeHandler}
                  />
                </div>
                <div className="col-md-6">
                  <CustomInput
                    name="startDate"
                    label="Starting On"
                    width="90%"
                    type="date"
                    onChangeHandler={onChangeHandler}
                  />
                </div>
              </div>
              <div
                className=" d-flex align-items-start"
                style={{ height: "40px" }}
              >
                <div className="col-md-2 d-flex align-items-end">
                  <span className="fw-bold mx-1 fs-4 mb-1">1</span>
                  <CustomInput
                    name="route1"
                    label="Route"
                    width="90%"
                    defaultValue="01"
                    onChangeHandler={onChangeHandler}
                  />
                </div>
                <div className="col-md-2 d-flex align-items-end">
                  <CustomDropDown
                    name="driver1"
                    label="Driver"
                    size="sm"
                    width="90%"
                    options={["QE", "QB"]}
                    onChangeHandler={onChangeHandler}
                  />
                </div>
                <div className="col-md-4 d-flex align-items-end">
                  <CustomInput
                    name="sequenceNumber1"
                    label="sequence #"
                    size="sm"
                    width="90%"
                    defaultValue="0470"
                    onChangeHandler={onChangeHandler}
                  />
                </div>
                <div className="col-md-4 d-flex align-items-end">
                  <CustomInput
                    name="routedBy"
                    label="Routed By"
                    size="sm"
                    width="90%"
                    defaultValue="ABS Route"
                    onChangeHandler={onChangeHandler}
                  />
                </div>
              </div>
              <div
                className=" d-flex align-items-start"
                style={{ height: "40px" }}
              >
                <div className="col-md-2 d-flex align-items-end">
                  <span className="fw-bold mx-1 fs-4 mb-1">2</span>
                  <CustomInput name="route2" width="90%" defaultValue="06" />
                </div>
                <div className="col-md-2 d-flex align-items-end">
                  <CustomDropDown
                    name="driver2"
                    size="sm"
                    width="90%"
                    options={["QE", "QB"]}
                    onChangeHandler={onChangeHandler}
                  />
                </div>
                <div className="col-md-4 d-flex align-items-end">
                  <CustomInput
                    name="sequenceNumber2"
                    size="sm"
                    width="90%"
                    defaultValue="0470"
                    onChangeHandler={onChangeHandler}
                  />
                </div>
              </div>
              <div
                className=" d-flex align-items-start"
                style={{ height: "40px" }}
              >
                <div className="col-md-2 d-flex align-items-end">
                  <span className="fw-bold mx-1 fs-4 mb-1">3</span>
                  <CustomInput name="route3" width="90%" defaultValue="06" />
                </div>
                <div className="col-md-2 d-flex align-items-end">
                  <CustomDropDown
                    name="driver3"
                    size="sm"
                    width="90%"
                    options={["QE", "QB"]}
                    onChangeHandler={onChangeHandler}
                  />
                </div>
                <div className="col-md-4 d-flex align-items-end">
                  <CustomInput
                    name="sequenceNumber3"
                    size="sm"
                    width="90%"
                    defaultValue="0470"
                    onChangeHandler={onChangeHandler}
                  />
                </div>
              </div>
              <div className=" d-flex align-items-start">
                <div className="col-md-2 d-flex align-items-end">
                  <span className="fw-bold mx-1 fs-4 mb-1">4</span>
                  <CustomInput name="route4" width="90%" defaultValue="06" />
                </div>
                <div className="col-md-2 d-flex align-items-end">
                  <CustomDropDown
                    name="driver4"
                    size="sm"
                    width="90%"
                    options={["QE", "QB"]}
                    onChangeHandler={onChangeHandler}
                  />
                </div>
                <div className="col-md-4 d-flex align-items-end">
                  <CustomInput
                    name="sequenceNumber4"
                    size="sm"
                    width="90%"
                    defaultValue="0470"
                    onChangeHandler={onChangeHandler}
                  />
                </div>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-secondary flex-fill">
                  Select Route
                </button>
                <button className="btn btn-secondary flex-fill">
                  Route/Driver Summary
                </button>
                <button className="btn btn-secondary flex-fill">
                  Suggest Route
                </button>
              </div>
            </div>

            <div>
              <p>Next Delivery Dates:</p>
              <div className="d-flex"></div>
              <span className="bg-warning  px-3">
                06 QE 08/15/2023 &nbsp; &nbsp; &nbsp; 11 QE 08/22/2023
              </span>
              <br />
              <span className="px-3">
                16 QE 08/29/2023 &nbsp; &nbsp; &nbsp; 01 QE 09/06/2023
              </span>
              <br />
              <button className="btn btn-secondary my-2">
                Print Route Book / Route PostCard{" "}
              </button>
              <div className="d-flex gap-2 justify-content-space-between">
                <button className="btn btn-primary flex-fill">
                  Route Memo
                </button>
                <button className="btn btn-primary flex-fill" type="submit">
                  Saved Product
                </button>
                <button className="btn btn-danger flex-fill">Cancel</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveredProduct;

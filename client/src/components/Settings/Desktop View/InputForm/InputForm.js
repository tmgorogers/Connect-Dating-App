import React from "react";
import { Row, Col } from "react-bootstrap";

function InputForm() {
  return (
    <div class="container bootstrap snippets bootdeys">
      <Row>
        <div class="col-xs-12 col-sm-9">
          <form class="form-horizontal">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">User info</h4>
              </div>
              <div class="panel-body">
                <div class="form-group">
                  <label class="col-sm-2 control-label">Location</label>
                  <div class="col-sm-10">
                    <select class="form-control">
                      <option selected="">Select country</option>
                      <option>Belgium</option>
                      <option>Canada</option>
                      <option>Denmark</option>
                      <option>Estonia</option>
                      <option>France</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">Company name</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">Position</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
            </div>

            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">Contact info</h4>
              </div>
              <div class="panel-body">
                <div class="form-group">
                  <label class="col-sm-2 control-label">Work number</label>
                  <div class="col-sm-10">
                    <input type="tel" class="form-control" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">Mobile number</label>
                  <div class="col-sm-10">
                    <input type="tel" class="form-control" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">E-mail address</label>
                  <div class="col-sm-10">
                    <input type="email" class="form-control" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">Work address</label>
                  <div class="col-sm-10">
                    <textarea rows="3" class="form-control"></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">Security</h4>
              </div>
              <div class="panel-body">
                <div class="form-group">
                  <label class="col-sm-2 control-label">Current password</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">New password</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control" />
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-10 col-sm-offset-2">
                    <div class="checkbox">
                      <input type="checkbox" id="checkbox_1" />
                      <label for="checkbox_1">Make this account public</label>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-10 col-sm-offset-2">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                    <button type="reset" class="btn btn-default">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Row>
    </div>
  );
}

export default InputForm;

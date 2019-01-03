import React, {Component} from 'react'
import Link from 'next/link'
import Head from '../components/head'
// import Nav from './nav'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { connect } from "react-redux";
import {get_users, insert_data } from '../Redux/actions'
import {validationSchema, initialValues} from '../helpers/validation' 

class Home extends Component{
    static async getInitialProps({ store, req, isServer, pathname, query }) {
      if(req){
        await store.dispatch(get_users())
        // const user = await store.getState().home_reducer.user;
        // console.log('store', JSON.stringify(user));
        return {}
      }else{
       store.dispatch(get_users());
      } 
    }

    // componentDidMount(){
    //     this.props.dispatch(get_users());
    // }

    render(){
        console.log('async data', this.props.user);
        return(
            <div>
                <Head title="Home" />
                {/*<Nav /> */}
                <h3>Fill user data </h3>
                <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit = { async (values, {resetForm}) =>{
                    console.log('all values', values);
                    await this.props.dispatch(insert_data(values))
                    await this.props.dispatch(get_users());
                    resetForm();
                }}
                
                render = {({errors, touched}) =>(
                    <div className="container" >
                    <Form>
                    <div className="form-group" >
                        <label htmlFor="username">Username</label>
                        <Field 
                        name="username"
                        placeholder="Username"
                        type="text"
                        className="form-control"
                        />
                        <ErrorMessage name="username" style={{color: "red"}} component="div" className="field-error" />
                    </div>

                    <div className="form-group" >
                        <label htmlFor="Email">Email</label>
                        <Field 
                        name="Email"
                        placeholder="Email"
                        type="email"
                        className="form-control"
                        />
                        <ErrorMessage name="Email" style={{color: "red"}} component="div" className="field-error" />
                    </div>

                    <div className="form-group" >
                        <label htmlFor="Name">Name</label>
                        <Field 
                        name="Name"
                        placeholder="Your name"
                        type="text"
                        className="form-control"
                        />
                        <ErrorMessage name="Name" style={{color: "red"}} component="div" className="field-error" />
                    </div>


                    <div className="form-group" >
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                    </Form>
                    </div>
                )}
                />
                <Link href="/about">
                  <a>go to About page</a>
                </Link>
                <div>
                  {this.props.user?
                  <table className="table">
                  <caption>List of users</caption>
                  {this.props.user.data.map((data, i)=>{
                    return <tbody key={i}>
                            <tr>
                                <td>{data.username}</td>
                                <td>{data.email}</td>
                                <td>{data.name}</td>
                            </tr>
                    </tbody>
                  })}
                  </table>
                    : null}
                </div>

            </div> 
)
}}

function mapStateToProps(state) {
    return {
      user: state.home_reducer.user
    }
}

export default connect(mapStateToProps)(Home)

import React, {Component} from 'react'
import Link from 'next/link'
import Head from '../components/head'
// import Nav from './nav'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from "react-redux";
import {insert_data} from '../Redux/actions'



const validationSchema = Yup.object().shape({
  username: Yup.string()
            .min(4, 'must be longer than 4 character')
            .required('username is required'),
  Email : Yup.string()
          .email('invalid email')
          .required('Email is required'),
  Name : Yup.string()
          .required('Name is required')
})

const initialValues = {
  username: '',
  Email: '',
  Name: ''
} 

class Home extends Component{
    static async getInitialProps({ store, isServer, pathname, query }) {
        await store.dispatch(insert_data())
        const user = await store.getState().home_reducer.user;
        console.log('store', JSON.stringify(user));
        return {user1: user}
      }
      componentDidMount(){
        console.log('this.props', this.props);
        this.props.dispatch(insert_data());
      }
      
    render(){
        console.log('async data', this.props.user1);
        return(
            <div>
                <Head title="Home" />
                {/*<Nav /> */}
                <h3>Fill user data </h3>
                <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit = {values =>{
                    console.log('all values', values);
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
                <div>
                  {this.props.user1? this.props.user1.map((data, i)=>{
                    return <li key={i} >{data.name}</li>
                  }): null}
                </div>

            </div> 
)
}}

function mapStateToProps(state) {
    return {
      user: state.home_reducer.user
    }
}


export default connect(mapStateToProps, null)(Home)

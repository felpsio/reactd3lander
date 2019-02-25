import React from "react";
import styled from "styled-components";
import pshot1 from "../images/pshot1.png";

const Wrapper = styled.div`
    max-width: 900px;
    margin: 7rem auto;
    padding: 0 2rem;
    text-align: center;
    img {
        height: 300px;
    }
    @media (max-width: 940px) {
        h1 {
            font-size: 30px;
        }
        img {
            height: 140px;
        }
    }
`;
const WrapperHeader = styled.div``;

const WrapperForm = styled.div`
    form {
        margin: 0 auto;
    }
`;
const WrapperSubmit = styled.div`
    input {
        background-color: #ff871c;
        line-height: 1.8;
        -webkit-box-shadow: 0 3px 0 rgb(214, 106, 18);
        box-shadow: 0 3px 0 rgb(214, 106, 18);
        text-transform: uppercase;
        padding: 0.5rem;
        margin: 1rem 0;
        display: inline-block;
        margin-bottom: 0;
        font-weight: 400;
        color: #fff;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        white-space: nowrap;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        border-radius: 4px;
    }
`;

const H1 = styled.h1`
    text-transform: uppercase;
`;

const EmailSignup = props => (
    <Wrapper>
        <H1>Start with a free chapter and email crash course 💌</H1>
        <h3>
            See what React for Data Visualization is like and learn the basics.
        </h3>
        <img src={pshot1} alt="readymade-logo" />
        <WrapperForm
            dangerouslySetInnerHTML={{
                __html: `
            <form action="https://app.convertkit.com/forms/862231/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="862231" data-uid="785fc7ef1f" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;redirect_url&quot;:&quot;&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false}}}" min-width="400 500 600 700 800" style="background-color: rgb(255, 255, 255); border-radius: 6px;"><div data-style="minimal"><div class="formkit-header" data-element="header" style="color: rgb(77, 77, 77); font-size: 20px; font-weight: 700;"><h1>Free Chapter 👾 and Email Crash Course 💌</h1></div><div data-element="subheader" class="formkit-subheader" style="color: rgb(104, 104, 104); font-size: 15px;"><p>Leave your email get a free sample of React for Data Visualization and email crash course. Learn the basics of building dataviz with React and D3.</p></div><ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul><div data-element="fields" data-stacked="true" class="seva-fields formkit-fields"><div class="formkit-field"><input class="formkit-input" aria-label="Your first name" name="fields[first_name]" placeholder="Your first name" type="text" style="color: rgb(0, 0, 0); border-color: rgb(227, 227, 227); border-radius: 4px; font-weight: 400;"></div><div class="formkit-field"><input class="formkit-input" name="email_address" placeholder="Your email address" required="" type="text" style="color: rgb(0, 0, 0); border-color: rgb(227, 227, 227); border-radius: 4px; font-weight: 400;"></div><button data-element="submit" class="formkit-submit formkit-submit" style="color: rgb(255, 255, 255); background-color: rgb(22, 119, 190); border-radius: 24px; font-weight: 700;"><div class="formkit-spinner"><div></div><div></div><div></div></div><span>Send me the free chapter</span></button></div><div data-element="guarantee" class="formkit-guarantee" style="color: rgb(77, 77, 77); font-size: 13px; font-weight: 400;"><p>No spam. Unsubscribe any time.</p></div><a href="https://convertkit.com/?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form" class="formkit-powered-by" data-element="powered-by" target="_blank" rel="noopener noreferrer">Powered By ConvertKit</a></div><style>.formkit-form[data-uid="785fc7ef1f"] *{font - family: "Helvetica Neue",Helvetica,Arial,Verdana,sans-serif;box-sizing:border-box;}.formkit-form[data-uid="785fc7ef1f"]{-webkit - font - smoothing: antialiased;-moz-osx-font-smoothing:grayscale;}.formkit-form[data-uid="785fc7ef1f"] legend{border: none;font-size:inherit;margin-bottom:10px;padding:0;position:relative;display:table;}.formkit-form[data-uid="785fc7ef1f"] fieldset{border: 0;padding:0.01em 0 0 0;margin:0;min-width:0;}.formkit-form[data-uid="785fc7ef1f"] body:not(:-moz-handler-blocked) fieldset{display: table-cell;}.formkit-form[data-uid="785fc7ef1f"] h1,.formkit-form[data-uid="785fc7ef1f"] h2,.formkit-form[data-uid="785fc7ef1f"] h3,.formkit-form[data-uid="785fc7ef1f"] h4,.formkit-form[data-uid="785fc7ef1f"] h5,.formkit-form[data-uid="785fc7ef1f"] h6{color: inherit;font-size:inherit;font-weight:inherit;}.formkit-form[data-uid="785fc7ef1f"] p{color: inherit;font-size:inherit;font-weight:inherit;}.formkit-form[data-uid="785fc7ef1f"][data-format="modal"]{display: none;}.formkit-form[data-uid="785fc7ef1f"][data-format="slide in"]{display: none;}.formkit-form[data-uid="785fc7ef1f"] .formkit-input,.formkit-form[data-uid="785fc7ef1f"] .formkit-select,.formkit-form[data-uid="785fc7ef1f"] .formkit-checkboxes{width: 100%;}.formkit-form[data-uid="785fc7ef1f"] .formkit-button,.formkit-form[data-uid="785fc7ef1f"] .formkit-submit{border: 0;border-radius:5px;color:#ffffff;cursor:pointer;display:inline-block;text-align:center;font-size:15px;font-weight:500;cursor:pointer;margin-bottom:15px;overflow:hidden;padding:0;position:relative;vertical-align:middle;}.formkit-form[data-uid="785fc7ef1f"] .formkit-button:hover,.formkit-form[data-uid="785fc7ef1f"] .formkit-submit:hover,.formkit-form[data-uid="785fc7ef1f"] .formkit-button:focus,.formkit-form[data-uid="785fc7ef1f"] .formkit-submit:focus{outline: none;}.formkit-form[data-uid="785fc7ef1f"] .formkit-button:hover > span,.formkit-form[data-uid="785fc7ef1f"] .formkit-submit:hover > span,.formkit-form[data-uid="785fc7ef1f"] .formkit-button:focus > span,.formkit-form[data-uid="785fc7ef1f"] .formkit-submit:focus > span{background - color: rgba(0,0,0,0.1);}.formkit-form[data-uid="785fc7ef1f"] .formkit-button > span,.formkit-form[data-uid="785fc7ef1f"] .formkit-submit > span{display: block;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;padding:12px 24px;}.formkit-form[data-uid="785fc7ef1f"] .formkit-input{background: #ffffff;font-size:15px;padding:12px;border:1px solid #e3e3e3;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;line-height:1.4;margin:0;-webkit-transition:border-color ease-out 300ms;transition:border-color ease-out 300ms;}.formkit-form[data-uid="785fc7ef1f"] .formkit-input:focus{outline: none;border-color:#1677be;-webkit-transition:border-color ease 300ms;transition:border-color ease 300ms;}.formkit-form[data-uid="785fc7ef1f"] .formkit-input::-webkit-input-placeholder{color: #848585;}.formkit-form[data-uid="785fc7ef1f"] .formkit-input::-moz-placeholder{color: #848585;}.formkit-form[data-uid="785fc7ef1f"] .formkit-input:-ms-input-placeholder{color: #848585;}.formkit-form[data-uid="785fc7ef1f"] .formkit-input::placeholder{color: #848585;}.formkit-form[data-uid="785fc7ef1f"] [data-group="dropdown"]{position: relative;display:inline-block;width:100%;}.formkit-form[data-uid="785fc7ef1f"] [data-group="dropdown"]::before{content: "";top:calc(50% - 2.5px);right:10px;position:absolute;pointer-events:none;border-color:#4f4f4f transparent transparent transparent;border-style:solid;border-width:6px 6px 0 6px;height:0;width:0;z-index:999;}.formkit-form[data-uid="785fc7ef1f"] [data-group="dropdown"] select{height: auto;width:100%;cursor:pointer;color:#333333;line-height:1.4;margin-bottom:0;padding:0 6px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-size:15px;padding:12px;padding-right:25px;border:1px solid #e3e3e3;background:#ffffff;}.formkit-form[data-uid="785fc7ef1f"] [data-group="dropdown"] select:focus{outline: none;}.formkit-form[data-uid="785fc7ef1f"] [data-group="checkboxes"]{text - align: left;margin:0;}.formkit-form[data-uid="785fc7ef1f"] [data-group="checkboxes"] [data-group="checkbox"]{margin - bottom: 10px;}.formkit-form[data-uid="785fc7ef1f"] [data-group="checkboxes"] [data-group="checkbox"] *{cursor: pointer;}.formkit-form[data-uid="785fc7ef1f"] [data-group="checkboxes"] [data-group="checkbox"]:last-of-type{margin - bottom: 0;}.formkit-form[data-uid="785fc7ef1f"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]{display: none;}.formkit-form[data-uid="785fc7ef1f"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"] + label::after{content: none;}.formkit-form[data-uid="785fc7ef1f"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]:checked + label::after{border - color: #ffffff;content:"";}.formkit-form[data-uid="785fc7ef1f"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]:checked + label::before{background: #10bf7a;border-color:#10bf7a;}.formkit-form[data-uid="785fc7ef1f"] [data-group="checkboxes"] [data-group="checkbox"] label{position: relative;display:inline-block;padding-left:28px;}.formkit-form[data-uid="785fc7ef1f"] [data-group="checkboxes"] [data-group="checkbox"] label::before,.formkit-form[data-uid="785fc7ef1f"] [data-group="checkboxes"] [data-group="checkbox"] label::after{position: absolute;content:"";display:inline-block;}.formkit-form[data-uid="785fc7ef1f"] [data-group="checkboxes"] [data-group="checkbox"] label::before{height: 16px;width:16px;border:1px solid #e3e3e3;background:#ffffff;left:0px;top:3px;}.formkit-form[data-uid="785fc7ef1f"] [data-group="checkboxes"] [data-group="checkbox"] label::after{height: 4px;width:8px;border-left:2px solid #4d4d4d;border-bottom:2px solid #4d4d4d;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);left:4px;top:8px;}.formkit-form[data-uid="785fc7ef1f"] .formkit-alert{background: #f9fafb;border:1px solid #e3e3e3;border-radius:5px;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;list-style:none;margin:25px auto;padding:12px;text-align:center;width:100%;}.formkit-form[data-uid="785fc7ef1f"] .formkit-alert:empty{display: none;}.formkit-form[data-uid="785fc7ef1f"] .formkit-alert-success{background: #d3fbeb;border-color:#10bf7a;color:#0c905c;}.formkit-form[data-uid="785fc7ef1f"] .formkit-alert-error{background: #fde8e2;border-color:#f2643b;color:#ea4110;}.formkit-form[data-uid="785fc7ef1f"] .formkit-spinner{display: -webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:0px;width:0px;margin:0 auto;position:absolute;top:0;left:0;right:0;width:0px;overflow:hidden;text-align:center;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;}.formkit-form[data-uid="785fc7ef1f"] .formkit-spinner > div{margin: auto;width:12px;height:12px;background-color:#fff;opacity:0.3;border-radius:100%;display:inline-block;-webkit-animation:formkit-bouncedelay-formkit-form-data-uid-785fc7ef1f- 1.4s infinite ease-in-out both;animation:formkit-bouncedelay-formkit-form-data-uid-785fc7ef1f- 1.4s infinite ease-in-out both;}.formkit-form[data-uid="785fc7ef1f"] .formkit-spinner > div:nth-child(1){-webkit - animation - delay: -0.32s;animation-delay:-0.32s;}.formkit-form[data-uid="785fc7ef1f"] .formkit-spinner > div:nth-child(2){-webkit - animation - delay: -0.16s;animation-delay:-0.16s;}.formkit-form[data-uid="785fc7ef1f"] .formkit-submit[data-active] .formkit-spinner{opacity: 1;height:100%;width:50px;}.formkit-form[data-uid="785fc7ef1f"] .formkit-submit[data-active] .formkit-spinner ~ span{opacity: 0;}@-webkit-keyframes formkit-bouncedelay-formkit-form-data-uid-785fc7ef1f-{0 %,80%,100%{-webkit - transform: scale(0);-ms-transform:scale(0);transform:scale(0);}40%{-webkit - transform: scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes formkit-bouncedelay-formkit-form-data-uid-785fc7ef1f-{0 %,80%,100%{-webkit - transform: scale(0);-ms-transform:scale(0);transform:scale(0);}40%{-webkit - transform: scale(1);-ms-transform:scale(1);transform:scale(1);}} .formkit-form[data-uid="785fc7ef1f"]{border: 1px solid #e3e3e3;background-size:cover;background-repeat:no-repeat;background-position:center;max-width:700px;}.formkit-form[data-uid="785fc7ef1f"] [data-style="minimal"]{padding: 20px;width:100%;}.formkit-form[data-uid="785fc7ef1f"] .formkit-header{margin: 0 0 27px 0;text-align:center;}.formkit-form[data-uid="785fc7ef1f"] .formkit-subheader{margin: 18px 0;text-align:center;}.formkit-form[data-uid="785fc7ef1f"] .formkit-guarantee{font - size: 13px;margin:10px 0 15px 0;text-align:center;}.formkit-form[data-uid="785fc7ef1f"] .formkit-guarantee > p{margin: 0;}.formkit-form[data-uid="785fc7ef1f"] .formkit-powered-by{color: #7d7d7d;display:block;font-size:12px;margin:10px 0 0 0;text-align:center;}.formkit-form[data-uid="785fc7ef1f"] .formkit-powered-by[data-active="false"]{opacity: 0.5;}.formkit-form[data-uid="785fc7ef1f"] .formkit-fields{display: -webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:25px auto 0 auto;}.formkit-form[data-uid="785fc7ef1f"] .formkit-field{min - width: 220px;}.formkit-form[data-uid="785fc7ef1f"] .formkit-field,.formkit-form[data-uid="785fc7ef1f"] .formkit-submit{margin: 0 0 15px 0;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;}.formkit-form[data-uid="785fc7ef1f"][min-width~="600"] [data-style="minimal"]{padding: 40px;}.formkit-form[data-uid="785fc7ef1f"][min-width~="600"] .formkit-fields[data-stacked="false"]{margin - left: -5px;margin-right:-5px;}.formkit-form[data-uid="785fc7ef1f"][min-width~="600"] .formkit-fields[data-stacked="false"] .formkit-field,.formkit-form[data-uid="785fc7ef1f"][min-width~="600"] .formkit-fields[data-stacked="false"] .formkit-submit{margin: 0 5px 15px 5px;}.formkit-form[data-uid="785fc7ef1f"][min-width~="600"] .formkit-fields[data-stacked="false"] .formkit-field{-webkit - flex: 100 1 auto;-ms-flex:100 1 auto;flex:100 1 auto;}.formkit-form[data-uid="785fc7ef1f"][min-width~="600"] .formkit-fields[data-stacked="false"] .formkit-submit{-webkit - flex: 1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;} </style></form>
            `
            }}
        />
    </Wrapper>
);

export default EmailSignup;

import React from "react";
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.css';
import  "./index.css";
import ProgressBar from "../components/progressBar";
import DetailsCard from "../components/detailsCard";
import {
  userName
  ,userDescription
  ,userLocation
  ,userEmail
  ,userPhone
  ,userLinks
  ,skills
  ,langauges
  ,experience
  ,education
  ,siteTitle
  ,siteDescription
  ,siteKeywords
  ,siteURL
} from "../../site-config"

import userAvatar from  "../static/images/mahipat.jpg";
import favicon32  from   "../static/images/mahipat32.jpg";
import favicon16  from   "../static/images/mahipat16.jpg";
import ogImage  from   "../static/images/mahipat250.jpg";

export default () => (
  <div className="container-fluid">
   <Helmet
      title={siteTitle}
      meta={[
        { name: 'description', content: siteDescription },
        { name: 'keywords', content: siteKeywords },
        { property: 'og:url', content: siteURL },
        { property: 'og:image', content: ogImage },
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: siteDescription },
      ]}
      link={[
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: favicon16 },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: favicon32 }
      ]}
    />
   <div className="row">
  <div className="col-md-3 col-xs-12">
    <div className="card">
      <img className="card-img-top" src={userAvatar} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{userName}</h5>
        <p className="card-text">{userDescription}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <i className="fa fa-home fa-fw margin-right">
          </i> 
          {userLocation}
        </li>
        <li className="list-group-item">
          <i className="fa fa-envelope fa-fw margin-right">
          </i>
          <a href={"mailto:"+userEmail}>
          {userEmail}
          </a>
        </li>
        <li className="list-group-item">
          <i className="fa fa-phone fa-fw margin-right">
          </i>
          <a href={"tel:"+userPhone}>
          {userPhone}
          </a>
        </li>
      </ul>
      <div className="card-body">
        <h5 className="card-title">
          <i className="fa fa-asterisk fa-fw margin-right" />
          <b>Skills</b>
        </h5>
        {
          skills.map((skill, index) => {
            return <div>
                      <p className="card-text">{skill.name}</p>
                      <ProgressBar rating={skill.rating}/>
                    </div>
          })
        }
        <br/>
        <hr/>
        <h5 className="card-title">
          <i className="fa fa-globe fa-fw margin-right" />
          <b>Langauges</b>
        </h5>
        {
          langauges.map((langauge, index) => {
            return <div>
                      <p className="card-text">{langauge.name}</p>
                      <ProgressBar rating={langauge.rating}/>
                    </div>
          })
        }
        <br/>
        <hr/>
        {
          userLinks.map((link, index)=>{
            return  <a href={link.url} className="card-link">
                      <i className={link.iconClassName} />
                    </a>
          })
        }
      </div>
    </div>
  </div>
  <div className="col-md-9 col-xs-12">
    <div className="card">
      <h2 className="mt-3 ml-3">
        <i className="fa fa-suitcase fa-fw mr-1"></i>
        Work Experience
      </h2>
      <div className="card-body">
        {
          experience.map((detail)=>{
            return <DetailsCard title={detail.position +" / " + detail.company} 
            startDate={detail.startDate} 
            endDate={detail.endDate}
            current={detail.current}
            overview={detail.overview}
            />
        })
      }
      </div>
    </div>
    <div className="card">
      <h2 className="mt-3 ml-3">
        <i className="fa fa-certificate fa-fw mr-1"></i>
        Education
      </h2>
      <div className="card-body">
      {
          education.map((detail)=>{
            return <DetailsCard title={detail.degree +" / " + detail.college} 
            startDate={detail.startDate} 
            endDate={detail.endDate}
            current={detail.current}
            overview={detail.overview}
            />
        })
      }
      </div>
    </div>

  </div>
</div>
</div>
)
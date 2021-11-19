// Libraries
import React, { Component } from 'react';

// Components
import ResponsiveSidebar from '../../components/nav/sidebar.component';
import Header from '../../components/nav/header.component';
import Badge from '../../components/tables/badge.component';
import Card from '../../components/tables/card.component';
import { Divider } from '@material-ui/core';

// Styles && Images


class Index extends Component {
  constructor(props) {
    super(props);
    this._selectBadge = this._selectBadge.bind(this);

    this.state = {
      tags: ['UI/UX']
    };
  }


  render() {
    return (
      <div>
        <ResponsiveSidebar page='home' />
        <div className="page">
          <Header
            user="Nick"
            title="Let's Find Work"
          />

          {/* Page Content */}
          <div className="content">
            <div className="badges">
              <Badge onClick={this._selectBadge} checkActive={this.state.tags} label='UI/UX'/>
              <Badge onClick={this._selectBadge} checkActive={this.state.tags} label='Front End'/>
              <Badge onClick={this._selectBadge} checkActive={this.state.tags} label='Back End'/>
              <Badge onClick={this._selectBadge} checkActive={this.state.tags} label='Data Science'/>
              <Badge onClick={this._selectBadge} checkActive={this.state.tags} label='Sales'/>
            </div>

            <div className="card-list">
              <Card
                name='Bungie'
                time='Just Now'
                title='Senior UI/UX Designer needed for ongoing support'
                description='blah blah blah blah blah blah blah blah blah blah blah lah'
              />
              <Card
                name='The Vanguard'
                time='3 minutes ago'
                title='Senior UI/UX Designer needed for ongoing support'
                description='Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap. Hashtag typewriter banh mi, squid keffiyeh'
              />
              <Card
                name='New Monarchy'
                time='16 hours ago'
                title='Senior UI/UX Designer needed for ongoing support'
                description='Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap. Hashtag typewriter banh mi, squid keffiyeh'
              />
              <Card
                name='Bungie'
                time='2 days ago'
                title='Senior UI/UX Designer needed for ongoing support'
                description='blah blah blah blah blah blah blah blah blah blah blah lah'
              />

              <div className="text-center">
                <button className="load-button">Load More</button>
              </div>
            </div>

          </div>
          <Divider orientation="vertical" />
          {/* End Page Content */}
          
          {/* sidebar filter */}
        </div>
      </div>
    );
  }

  _selectBadge = (value, type) => {
    if (type == 'add') {
      this.setState({ tags: [...this.state.tags, value] });
    } else {
      const tags = [...this.state.tags];
      const index = tags.indexOf(value);
      if (index !== -1) {
        tags.splice(index, 1);
        this.setState({ tags: tags });
      }
    }
  }

}

export default Index;

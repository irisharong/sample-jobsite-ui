import Utils from 'app/utils/Utils';
import Typography from '@material-ui/core/Typography';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchHeader from 'components/Search/SearchHeader';
import FindHelpListItem from './FindHelpListItem';
import SearchRightSideBar from 'components/Search/SearchRightSideBar';
import QuickSubmit from 'components/Search/QuickSubmit';
// import { selectJob } from './store/findWorkSlice';
import { contractorList } from "mock/contractorList";

function FindHelpList(props) {
  // const jobLists = useSelector(selectJob);
  const searchText = ""; // useSelector(({ jobsApp }) => jobsApp.jobs.searchText);

  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    function filterData() {
      const { params } = props.match;
      const { id, labelId } = params;

      let data = contractorList;
      if (labelId) {
        data = data.filter((job) => job.labels.includes(labelId));
      }
      if (!id) {
        data = data.filter((job) => !job.archive);
      }
      if (searchText.length === 0) {
        return data;
      }
      data = Utils.filterArrayByString(data, searchText);
      return data;
    }

    if (contractorList.length > 0) {
      setFilteredData(filterData());
    }
  }, [contractorList, props.match]);

  const [showQuickApply, setShowQuickApply] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleSelect = (id) => {
    setSelected(id);
    setShowQuickApply(true);
  }
  const handleClose = () => {
    setShowQuickApply(false);
  }

  return !filteredData || filteredData.length === 0 ? (
    <div className="flex items-center justify-center h-full">
      <Typography color="textSecondary" variant="h5">
        There are no Contractors!
      </Typography>
    </div>
  ) : (
    <section className="section-row">
      <div className="page-row">
        <div className="-col">
          <SearchHeader 
            user="Max"
            title="Let's Find Work"
          />
            
            <div className="tab-container">
              <div className="page-row">
                <div className="page-row">
                  <div className="box-card -col">
                    <header className="head">
                      <h3 className="heading-3">Top UI/UX Contractors</h3>
                    </header>
                    
                    <div className="segment">
                      {filteredData.map((contractor) => (
                        <FindHelpListItem
                          key={contractor.id}
                          contractor={contractor}
                          active={contractor.id === selected}
                          onClick={() => handleSelect(contractor.id)}
                        />
                      ))}
                    </div>
                    
                    <div className="-center b0 mt-3">
                      <button className="button -blue">Load more</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>
        { showQuickApply ? (
          <QuickSubmit
            handleClose={handleClose}
            title="Quick Message"
            showDesc={false}
          />
        ) : (
          <SearchRightSideBar />
        )}
        
      </div>
    </section>
    
        
  );
}

export default withRouter(FindHelpList);

import React, { useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';

import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

import { Details, Main } from './components';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null)

  const executeScroll = () => main.current.scrollIntoView()    

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <div>
       
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
        
        
      </Grid>

      {/* ******** */}

      {/* <Grid className={classes.grid}  container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
        <Grid item md={6} lg={4} className={classes.mobile} >
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item md={12} lg={3} className={classes.sizeHandler} className={classes.main}>
          <Main />
        </Grid>
       
        <Grid item md={6} lg={6} className={classes.sizeHandler} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item md={6} lg={4} className={classes.sizeHandler} className={classes.last}>
          <Details title="Expense" />
        </Grid>
        

        
        
        
      </Grid>
 */}



      <PushToTalkButtonContainer  >
          <PushToTalkButton  />
        </PushToTalkButtonContainer>
      
     
      
      
      
    </div>
  );
};

export default App;

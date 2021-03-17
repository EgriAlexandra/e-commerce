import { makeStyles } from "@material-ui/core/styles"; 

// export the call to the function makeStyles
//instant return
export default makeStyles(()=>({
    //styles
    root:{
        maxWidth: "100%"
    },
     media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },

}));
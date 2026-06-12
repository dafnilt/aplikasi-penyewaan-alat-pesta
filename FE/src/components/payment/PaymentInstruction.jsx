import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";

function PaymentInstruction({ title, steps }) {
  return (
    <Accordion
      disableGutters
      elevation={0}
      sx={{
        borderRadius: "12px",
        overflow: "hidden",
        "&:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<AddIcon />}
        sx={{
          backgroundColor: "#F2F2F2",
        }}
      >
        {title}
      </AccordionSummary>

      <AccordionDetails>
        <ol className="list-decimal pl-5 text-sm space-y-1">
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </AccordionDetails>
    </Accordion>
  );
}

export default PaymentInstruction;
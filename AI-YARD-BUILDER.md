# AI Yard Builder

## Purpose

The AI Yard Builder should be part of the sales and estimating workflow, not just a toy.

A customer should eventually be able to:

- upload photos of their yard or flower bed;
- select plants, products, and features;
- generate design concepts;
- save concepts to their customer account;
- add selected items to a project cart;
- request an estimate based on the concept;
- allow admin to review the concept and convert it into an estimate or job.

## Platform connections

AI concepts should connect to:

- User / Customer;
- Property;
- ProjectCart;
- selected Product and Plant records;
- ServiceRequest or Estimate;
- uploaded source photos;
- generated concept images;
- admin review status.

## Security

- AI uploads should be stored securely.
- API keys must remain server-side.
- Customer photos and generated concepts are private by default.
- Public display requires explicit approval.

## Implementation order

1. Keep UI scaffold and mock concepts.
2. Add database-backed saved concepts.
3. Add customer authentication and property association.
4. Add estimate conversion workflow.
5. Only then connect real AI image generation.

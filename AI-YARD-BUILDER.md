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

## 2026 Staged AI Design Consultation Workflow

The `/design` page now behaves as an AI landscape design consultant before any image generation is attempted.

1. Customer uploads a property, yard, frontage, or flower bed image.
2. Customer selects area, project type, budget, style, and plants/products/features.
3. The AI design conversation asks clarifying text-only questions about maintenance, sun/shade, plant mix, colors, safety, bed borders, curb appeal goals, existing plants, and preservation requirements.
4. The app builds a structured design brief with uploaded image reference, selected context, sun/shade assumption, maintenance level, recommended layout, materials, preservation/change notes, prompt draft, and Cutler estimate notes.
5. Customer can edit answers, add details, approve the brief, save without generation, or request an estimate without generation.
6. Concept generation is gated until the brief is approved and the customer clicks Generate concept images.

### Cost control

- Intake/chat is text-only and should stay low cost.
- Brief generation is text-only.
- Image generation happens only after approval.
- Generate one concept first; require warning/confirmation before multiple real provider variations.
- Save the design brief so repeated generations can reuse context.

### Provider abstraction

Server-side scaffolds are in:

- `lib/ai/designConsultant.ts`
- `lib/ai/designBrief.ts`
- `lib/ai/imageProvider.ts`
- `app/api/design/chat/route.ts`
- `app/api/design/brief/route.ts`
- `app/api/design/generate/route.ts`

`AI_PROVIDER=mock` returns polished mock concept cards and never exposes API keys client-side.

### Image prompt rules

Final image prompts must preserve the uploaded house/building/property photo as the base scene, preserve camera angle and major structures, modify only the selected bed/yard/landscape area, use selected products/features as guidance, stay realistic/buildable, avoid fantasy landscapes, avoid architecture changes, and avoid unrealistic Central Arkansas plants unless the customer explicitly asks for conceptual inspiration.

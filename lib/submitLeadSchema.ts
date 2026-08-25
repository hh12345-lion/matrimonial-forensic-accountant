export type SubmitLeadPayload = {
  fullName: string;
  email: string;
  phone: string;
  formType?: "contact" | "instruct";
};

export function parseSubmitLeadBody(
  body: Record<string, unknown>
): SubmitLeadPayload | null {
  const fullName = String(body.fullName || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();

  if (!fullName || !email) {
    return null;
  }

  const formType = body.formType;
  const parsedFormType =
    formType === "contact" || formType === "instruct" ? formType : undefined;

  return {
    fullName,
    email,
    phone,
    formType: parsedFormType,
  };
}

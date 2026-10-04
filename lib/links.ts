import { SITE } from "./site";

// Every link to aibeva.com, aiblab.info or another AIBlab site carries these UTM parameters.
const UTM = `utm_source=${SITE.domain}&utm_medium=referral&utm_campaign=ecosystem`;

export function withUtm(url: string): string {
  const [base, hash] = url.split("#");
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}${UTM}${hash ? `#${hash}` : ""}`;
}

export const aibeva = (path = "/") => withUtm(`https://aibeva.com${path}`);
export const DOWNLOAD = aibeva("/download");
export const AIBLAB = withUtm("https://aiblab.info/");

export const ECOSYSTEM = [
  { label: "aibeva.com",           desc: "AIBEVA",                    href: aibeva() },
  { label: "aiblab.info",          desc: "AIBlab",                    href: AIBLAB },
  { label: "aibsn.org",            desc: "AIBSN registry",            href: withUtm("https://aibsn.org/") },
  { label: "www.aibguardian.info", desc: "AIBguardian",               href: withUtm("https://www.aibguardian.info/") },
  { label: "aibgin.info",          desc: "AIBgin (in development)",   href: withUtm("https://www.aibgin.info/") },
  { label: "aibfamily.cloud",      desc: "AIBfamily (in development)", href: withUtm("https://www.aibfamily.cloud/") },
  { label: "iamyouraib.online",    desc: "the book",                  href: withUtm("https://iamyouraib.online/") },
].map((e) => (e.label.replace(/^www\./, "") === SITE.domain ? { ...e, href: "/" } : e));

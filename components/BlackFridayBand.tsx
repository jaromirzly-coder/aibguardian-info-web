// Black Friday bar (21. 11. 2026): one line above the header on every page. No end date shown. Remove when the offer ends.
export default function BlackFridayBand() {
  return (
    <div className="bf-bar" role="note">
      <span className="bf-tag">Black Friday</span>
      AIBSN identity registration free with AIBEVA Level S2{" "}
      <span className="bf-note">(normally USD 100 at aibsn.org)</span>. 14 days free first.{" "}
      <a href="https://aibeva.com/download?utm_source=aibguardian.info&utm_medium=referral&utm_campaign=black-friday#registration">Details &rarr;</a>
    </div>
  );
}

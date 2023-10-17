export default function useUrlState() {
  const queryParams = new URLSearchParams(window?.location?.search || '');
  return queryParams;
}

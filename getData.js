import fse from "fs-extra";
import path from "path";
const __dirname = path.resolve();
export async function get_common_data(language) {
  return {};
}
export async function get_detail_index_data(language) {
  let data = [{ page_name: "" }] || { page_name: "" } || null;
  return "{page_name:''},".repeat(10000).split(",");
}
export async function get_index_data(language) {
  let data = [{ page_name: "" }] || { page_name: "" } || null;
  return data;
}

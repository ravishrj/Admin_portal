"use client";
import Link from "next/link";
import { useState } from "react";
const Mobile_Navbar = ({ setMobNavabarToggle, isLogin, setLogin }) => {
  const [productToggle, setProductToggle] = useState(false);
  const [adminToggle, setAdminToggle] = useState(false);
  const [scriptToggle, setScriptToggle] = useState(false);
  return (
    <>
      <div
        className="drawer-portal"
        bis_skin_checked={1}
        {...(isLogin ? { "data-floating-ui-inert": true } : {})}
      >
        <div
          className="drawer-overlay drawer-overlay-after-open"
          bis_skin_checked={1}
        >
          <div
            className="drawer drawer-after-open"
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            bis_skin_checked={1}
          >
            <div
              className="drawer-content vertical"
              bis_skin_checked={1}
              style={{ width: 330, left: 0 }}
            >
              <div className="drawer-header" bis_skin_checked={1}>
                <h4>Navigation</h4>
                <button
                  className="close-button button-press-feedback"
                  type="button"
                  onClick={() => setMobNavabarToggle((prev) => !prev)}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="drawer-body p-0" bis_skin_checked={1}>
                <nav className="menu px-4 pb-4">
                 
                  <div className="menu-group" bis_skin_checked={1}>
                    <div className="menu-title" bis_skin_checked={1}>
                      Concepts
                    </div>
                    <ul>
                      <div className="menu-collapse" bis_skin_checked={1}>
                        <div
                          className="menu-collapse-item"
                          role="presentation"
                          onClick={() => {
                            setAdminToggle((prev) => !prev);
                          }}
                          bis_skin_checked={1}
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-2xl">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M194.82,151.43l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0l-20.3-55.09-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3A7.92,7.92,0,0,1,194.82,151.43Z"
                                  opacity="0.2"
                                />
                                <path d="M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z" />
                              </svg>
                            </span>
                            <span>Admins</span>
                          </span>
                          <span
                            className="text-lg mt-1"
                            style={{
                              transform: adminToggle
                                ? "rotate(-180deg)"
                                : "rotate(0deg)",
                            }}
                          >
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6 9l6 6l6 -6" />
                            </svg>
                          </span>
                        </div>
                        <ul
                          className=""
                          style={{
                            opacity: adminToggle ? 1 : 0,
                            height: adminToggle ? "auto" : 0,
                            overflow: "hidden",
                          }}
                        >
                          <div
                            className="menu-item menu-item-hoverable items-center gap-2"
                            bis_skin_checked={1}
                            style={{ height: 48 }}
                          >
                            <div bis_skin_checked={1}>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                className="text-3xl w-[24px] opacity-25"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" />
                              </svg>
                            </div>
                            <Link
                              className="flex items-center gap-2 h-full w-full"
                              href="/concepts/Admin/admin-list"
                              target=""
                            >
                              <span>List</span>
                            </Link>
                          </div>
                          <div
                            className="menu-item menu-item-hoverable items-center gap-2"
                            bis_skin_checked={1}
                            style={{ height: 48 }}
                          >
                            <div bis_skin_checked={1}>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                className="text-3xl w-[24px] opacity-25"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" />
                              </svg>
                            </div>
                            <Link
                              className="flex items-center gap-2 h-full w-full"
                              href="/concepts/ai/image"
                              target=""
                            >
                              <span>Image</span>
                            </Link>
                          </div>
                        </ul>
                      </div>
                      {/* <div className="menu-collapse" bis_skin_checked={1}>
                        <div
                          className="menu-collapse-item"
                          role="presentation"
                          bis_skin_checked={1}
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-2xl">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M208,72V184H48V72Z" opacity="0.2" />
                                <path d="M88,144V128a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V120a8,8,0,0,0-16,0v24A8,8,0,0,0,128,152Zm32,0a8,8,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8,8,0,0,0,160,152Zm56-72v96h8a8,8,0,0,1,0,16H136v17.38a24,24,0,1,1-16,0V192H32a8,8,0,0,1,0-16h8V80A16,16,0,0,1,24,64V48A16,16,0,0,1,40,32H216a16,16,0,0,1,16,16V64A16,16,0,0,1,216,80ZM136,232a8,8,0,1,0-8,8A8,8,0,0,0,136,232ZM40,64H216V48H40ZM200,80H56v96H200Z" />
                              </svg>
                            </span>
                            <span>Projects</span>
                          </span>
                          <span
                            className="text-lg mt-1"
                            style={{ transform: "rotate(0deg)" }}
                          >
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6 9l6 6l6 -6" />
                            </svg>
                          </span>
                        </div>
                        <ul
                          className=""
                          style={{
                            opacity: 0,
                            height: 0,
                            overflow: "hidden",
                          }}
                        >
                          <div
                            className="menu-item menu-item-hoverable items-center gap-2"
                            bis_skin_checked={1}
                            style={{ height: 48 }}
                          >
                            <div bis_skin_checked={1}>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                className="text-3xl w-[24px] opacity-25"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" />
                              </svg>
                            </div>
                            <a
                              className="flex items-center gap-2 h-full w-full"
                              href="/concepts/projects/scrum-board"
                              target=""
                            >
                              <span>Scrum Board</span>
                            </a>
                          </div>
                          <div
                            className="menu-item menu-item-hoverable items-center gap-2"
                            bis_skin_checked={1}
                            style={{ height: 48 }}
                          >
                            <div bis_skin_checked={1}>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                className="text-3xl w-[24px] opacity-25"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" />
                              </svg>
                            </div>
                            <a
                              className="flex items-center gap-2 h-full w-full"
                              href="/concepts/projects/project-list"
                              target=""
                            >
                              <span>List</span>
                            </a>
                          </div>
                          <div
                            className="menu-item menu-item-hoverable items-center gap-2"
                            bis_skin_checked={1}
                            style={{ height: 48 }}
                          >
                            <div bis_skin_checked={1}>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                className="text-3xl w-[24px] opacity-25"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" />
                              </svg>
                            </div>
                            <a
                              className="flex items-center gap-2 h-full w-full"
                              href="/concepts/projects/project-details/27"
                              target=""
                            >
                              <span>Details</span>
                            </a>
                          </div>
                          <div
                            className="menu-item menu-item-hoverable items-center gap-2"
                            bis_skin_checked={1}
                            style={{ height: 48 }}
                          >
                            <div bis_skin_checked={1}>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                className="text-3xl w-[24px] opacity-25"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" />
                              </svg>
                            </div>
                            <a
                              className="flex items-center gap-2 h-full w-full"
                              href="/concepts/projects/tasks"
                              target=""
                            >
                              <span>Tasks</span>
                            </a>
                          </div>
                          <div
                            className="menu-item menu-item-hoverable items-center gap-2"
                            bis_skin_checked={1}
                            style={{ height: 48 }}
                          >
                            <div bis_skin_checked={1}>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                className="text-3xl w-[24px] opacity-25"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" />
                              </svg>
                            </div>
                            <a
                              className="flex items-center gap-2 h-full w-full"
                              href="/concepts/projects/tasks/1"
                              target=""
                            >
                              <span>Issue</span>
                            </a>
                          </div>
                        </ul>
                      </div> */}
                      <div className="menu-collapse" bis_skin_checked={1}>
                        <div
                          className="menu-collapse-item"
                          role="presentation"
                          onClick={() => {
                            setScriptToggle((prev) => !prev);
                          }}
                          bis_skin_checked={1}
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-2xl">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M208,72V184H48V72Z" opacity="0.2" />
                                <path d="M88,144V128a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V120a8,8,0,0,0-16,0v24A8,8,0,0,0,128,152Zm32,0a8,8,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8,8,0,0,0,160,152Zm56-72v96h8a8,8,0,0,1,0,16H136v17.38a24,24,0,1,1-16,0V192H32a8,8,0,0,1,0-16h8V80A16,16,0,0,1,24,64V48A16,16,0,0,1,40,32H216a16,16,0,0,1,16,16V64A16,16,0,0,1,216,80ZM136,232a8,8,0,1,0-8,8A8,8,0,0,0,136,232ZM40,64H216V48H40ZM200,80H56v96H200Z" />
                              </svg>
                            </span>
                            <span>Scripts</span>
                          </span>
                          <span
                            className="text-lg mt-1"
                            style={{
                              transform: scriptToggle
                                ? "rotate(-180deg)"
                                : "rotate(0deg)",
                            }}
                          >
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6 9l6 6l6 -6" />
                            </svg>
                          </span>
                        </div>
                        <ul
                          className=""
                          style={{
                            opacity: scriptToggle ? 1 : 0,
                            height: scriptToggle ? "auto" : 0,
                            overflow: "hidden",
                          }}
                        >
                          <div
                            className="menu-item menu-item-hoverable items-center gap-2"
                            bis_skin_checked={1}
                            style={{
                              opacity: scriptToggle ? 1 : 0,
                              height: scriptToggle ? "auto" : 0,
                              overflow: "hidden",
                            }}
                          >
                            <div bis_skin_checked={1}>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                className="text-3xl w-[24px] opacity-25"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" />
                              </svg>
                            </div>
                            <Link
                              className="flex items-center gap-2 h-full w-full"
                              href="/concepts/scripts/create-script"
                            >
                              <span>Create Scripts</span>
                            </Link>
                          </div>
                          <div
                            className="menu-item menu-item-hoverable items-center gap-2"
                            bis_skin_checked={1}
                            style={{ height: 48 }}
                          >
                            <div bis_skin_checked={1}>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                className="text-3xl w-[24px] opacity-25"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" />
                              </svg>
                            </div>
                            <Link
                              className="flex items-center gap-2 h-full w-full"
                              href="/concepts/scripts/script-list"
                              target=""
                            >
                              <span>Scripts-List</span>
                            </Link>
                          </div>
                        </ul>
                      </div>
                      <div className="menu-collapse" bis_skin_checked={1}>
                        <div
                          className="menu-collapse-item"
                          role="presentation"
                          bis_skin_checked={1}
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-2xl">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M136,108A52,52,0,1,1,84,56,52,52,0,0,1,136,108Z"
                                  opacity="0.2"
                                />
                                <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />
                              </svg>
                            </span>
                            <span>Customer</span>
                          </span>
                          <span
                            className="text-lg mt-1"
                            style={{ transform: "rotate(0deg)" }}
                          >
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6 9l6 6l6 -6" />
                            </svg>
                          </span>
                        </div>
                        <ul
                          className=""
                          style={{
                            opacity: 0,
                            height: 0,
                            overflow: "hidden",
                          }}
                        >
                          <div
                            className="menu-item menu-item-hoverable items-center gap-2"
                            bis_skin_checked={1}
                            style={{ height: 48 }}
                          >
                            <div bis_skin_checked={1}>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                className="text-3xl w-[24px] opacity-25"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" />
                              </svg>
                            </div>
                            <a
                              className="flex items-center gap-2 h-full w-full"
                              href="/concepts/customers/customer-list"
                              target=""
                            >
                              <span>List</span>
                            </a>
                          </div>
                          <div
                            className="menu-item menu-item-hoverable items-center gap-2"
                            bis_skin_checked={1}
                            style={{ height: 48 }}
                          >
                            <div bis_skin_checked={1}>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                className="text-3xl w-[24px] opacity-25"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" />
                              </svg>
                            </div>
                            <a
                              className="flex items-center gap-2 h-full w-full"
                              href="/concepts/customers/customer-edit/1"
                              target=""
                            >
                              <span>Edit</span>
                            </a>
                          </div>
                          <div
                            className="menu-item menu-item-hoverable items-center gap-2"
                            bis_skin_checked={1}
                            style={{ height: 48 }}
                          >
                            <div bis_skin_checked={1}>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                className="text-3xl w-[24px] opacity-25"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" />
                              </svg>
                            </div>
                            <a
                              className="flex items-center gap-2 h-full w-full"
                              href="/concepts/customers/customer-create"
                              target=""
                            >
                              <span>Create</span>
                            </a>
                          </div>
                          <div
                            className="menu-item menu-item-hoverable items-center gap-2"
                            bis_skin_checked={1}
                            style={{ height: 48 }}
                          >
                            <div bis_skin_checked={1}>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                className="text-3xl w-[24px] opacity-25"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" />
                              </svg>
                            </div>
                            <a
                              className="flex items-center gap-2 h-full w-full"
                              href="/concepts/customers/customer-details/1"
                              target=""
                            >
                              <span>Details</span>
                            </a>
                          </div>
                        </ul>
                      </div>
                      <div
                        className="menu-collapse"
                        bis_skin_checked={1}
                        onClick={() => setProductToggle((prev) => !prev)}
                      >
                        <div
                          className="menu-collapse-item"
                          role="presentation"
                          bis_skin_checked={1}
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-2xl">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,.7-3.25Z"
                                  opacity="0.2"
                                />
                                <path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z" />
                              </svg>
                            </span>
                            <span>Products</span>
                          </span>
                          <span
                            className="text-lg mt-1"
                            style={{
                              transform: productToggle
                                ? "rotate(-180deg)"
                                : "rotate(0deg)",
                            }}
                          >
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6 9l6 6l6 -6" />
                            </svg>
                          </span>
                        </div>
                        <ul
                          className=""
                          style={{
                            opacity: productToggle ? 1 : 0,
                            height: productToggle ? "auto" : 0,
                            overflow: "hidden",
                          }}
                        >
                          <div
                            className="menu-item menu-item-hoverable items-center gap-2"
                            bis_skin_checked={1}
                            style={{ height: 48 }}
                          >
                            <div bis_skin_checked={1}>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                className="text-3xl w-[24px] opacity-25"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" />
                              </svg>
                            </div>
                            <Link
                              className="flex items-center gap-2 h-full w-full"
                              href="/concepts/products/product-list"
                              target=""
                            >
                              <span>List</span>
                            </Link>
                          </div>
                          <div
                            className="menu-item menu-item-hoverable items-center gap-2"
                            bis_skin_checked={1}
                            style={{ height: 48 }}
                          >
                            <div bis_skin_checked={1}>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                className="text-3xl w-[24px] opacity-25"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" />
                              </svg>
                            </div>
                            <Link
                              className="flex items-center gap-2 h-full w-full"
                              href="/concepts/products/product-edit/12"
                              target=""
                            >
                              <span>Edit</span>
                            </Link>
                          </div>
                          <div
                            className="menu-item menu-item-hoverable items-center gap-2"
                            bis_skin_checked={1}
                            style={{ height: 48 }}
                          >
                            <div bis_skin_checked={1}>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                className="text-3xl w-[24px] opacity-25"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" />
                              </svg>
                            </div>
                            <Link
                              className="flex items-center gap-2 h-full w-full"
                              href="/concepts/products/product-create"
                              target=""
                            >
                              <span>Create</span>
                            </Link>
                          </div>
                        </ul>
                      </div>
                     
                      <div className="menu-collapse" bis_skin_checked={1}>
                        <div
                          className="menu-collapse-item"
                          role="presentation"
                          bis_skin_checked={1}
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-2xl">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M224,128a95.76,95.76,0,0,1-31.8,71.37A72,72,0,0,0,128,160a40,40,0,1,0-40-40,40,40,0,0,0,40,40,72,72,0,0,0-64.2,39.37h0A96,96,0,1,1,224,128Z"
                                  opacity="0.2"
                                />
                                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z" />
                              </svg>
                            </span>
                            <span>Account</span>
                          </span>
                          <span
                            className="text-lg mt-1"
                            style={{ transform: "rotate(0deg)" }}
                          >
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6 9l6 6l6 -6" />
                            </svg>
                          </span>
                        </div>
                        <ul
                          className=""
                          style={{
                            opacity: 0,
                            height: 0,
                            overflow: "hidden",
                          }}
                        >
                          <div
                            className="menu-item menu-item-hoverable items-center gap-2"
                            bis_skin_checked={1}
                            style={{ height: 48 }}
                          >
                            <div bis_skin_checked={1}>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                className="text-3xl w-[24px] opacity-25"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" />
                              </svg>
                            </div>
                            <Link
                              className="flex items-center gap-2 h-full w-full"
                              href="/concepts/account/settings"
                              target=""
                            >
                              <span>Settings</span>
                            </Link>
                          </div>
                          <div
                            className="menu-item menu-item-hoverable items-center gap-2"
                            bis_skin_checked={1}
                            style={{ height: 48 }}
                          >
                            <div bis_skin_checked={1}>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                className="text-3xl w-[24px] opacity-25"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" />
                              </svg>
                            </div>
                            <Link
                              className="flex items-center gap-2 h-full w-full"
                              href="/concepts/account/activity-log"
                              target=""
                            >
                              <span>Activity log</span>
                            </Link>
                          </div>
                          <div
                            className="menu-item menu-item-hoverable items-center gap-2"
                            bis_skin_checked={1}
                            style={{ height: 48 }}
                          >
                            <div bis_skin_checked={1}>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                className="text-3xl w-[24px] opacity-25"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" />
                              </svg>
                            </div>
                            <a
                              className="flex items-center gap-2 h-full w-full"
                              href="/concepts/account/roles-permissions"
                              target=""
                            >
                              <span>Roles &amp; Permissions</span>
                            </a>
                          </div>
                          <div
                            className="menu-item menu-item-hoverable items-center gap-2"
                            bis_skin_checked={1}
                            style={{ height: 48 }}
                          >
                            <div bis_skin_checked={1}>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 256 256"
                                className="text-3xl w-[24px] opacity-25"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" />
                              </svg>
                            </div>
                            <Link
                              className="flex items-center gap-2 h-full w-full"
                              href="/concepts/account/pricing"
                              target=""
                            >
                              <span>Pricing</span>
                            </Link>
                          </div>
                        </ul>
                      </div>
                      
                    </ul>
                  </div>
                
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mobile_Navbar;

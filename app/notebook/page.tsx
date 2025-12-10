'use client'

import React, { useState, useEffect } from 'react'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism.css'

const NotebookPage = () => {
  const [code, setCode] = useState('print("Hello, world!")')
  const [output, setOutput] = useState('')
  const [pyodide, setPyodide] = useState(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js'
    script.async = true
    script.onload = () => {
      const loadPyodide = async () => {
        const pyodide = await (window as any).loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.21.3/full/'
        })
        setPyodide(pyodide)
      }
      loadPyodide()
    }
    document.head.appendChild(script)
  }, [])

  const runCode = async () => {
    if (!pyodide) {
      return
    }
    try {
      (pyodide as any).globals.set('__old_print__', (pyodide as any).globals.get('print'))
      ;(pyodide as any).globals.set('print', (...args: any[]) => {
        setOutput(prev => `${prev}${args.join(' ')}\n`)
      })
      await (pyodide as any).runPythonAsync(code)
    } catch (err) {
      setOutput(String(err))
    } finally {
      (pyodide as any).globals.set('print', (pyodide as any).globals.get('__old_print__'))
    }
  }

  return (
    <div className="notebook-container">
      <h1 className="notebook-title">Client-side Jupyter Notebook</h1>
      <div className="notebook-cell">
        <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code => highlight(code, languages.python, 'python')}
          padding={10}
          className="code-editor"
        />
        <button onClick={runCode} className="run-button" disabled={!pyodide}>
          Run
        </button>
        <pre className="output-area">
          {output}
        </pre>
      </div>
    </div>
  )
}

export default NotebookPage

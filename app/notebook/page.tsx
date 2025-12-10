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
    <div style={{ padding: '20px' }}>
      <h1>Client-side Jupyter Notebook</h1>
      <Editor
        value={code}
        onValueChange={code => setCode(code)}
        highlight={code => highlight(code, languages.python)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 16,
          border: '1px solid #ddd',
          borderRadius: '5px',
          minHeight: '200px',
        }}
      />
      <button onClick={runCode} style={{ marginTop: '10px' }} disabled={!pyodide}>
        Run
      </button>
      <pre style={{ marginTop: '10px', background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
        {output}
      </pre>
    </div>
  )
}

export default NotebookPage
